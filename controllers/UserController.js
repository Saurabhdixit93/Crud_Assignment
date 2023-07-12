// In-memory storage for registered users
const UserModel = [];
const bcryptJs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secreteKey = process.env.SECRETE_KEY;
// signup function
module.exports.createUser = async (req, res) => {
  const { userName, userEmail, userPassword } = req.body;
  try {
    // Check if the user already exists
    const userExistsWithEmail = UserModel.some(
      (user) => user.userEmail === userEmail
    );

    if (userExistsWithEmail) {
      return res.status(400).json({
        message: "User Already Exists with this Email ",
      });
    }
    // Check if the user already exists
    const userExistsWithuserName = UserModel.some(
      (user) => user.userName === userName
    );
    if (userExistsWithuserName) {
      return res.status(302).json({
        message: "User Already Exists with this UserName ",
      });
    }

    // Hash the password
    const hashedPassword = await bcryptJs.hash(userPassword, 10);
    // Create a new user object
    const userCreate = {
      userEmail: userEmail,
      userName: userName,
      userPassword: hashedPassword,
    };
    // Add the user to the in-memory storage
    UserModel.push(userCreate);

    return res.status(201).json({
      message: "User Created Successfull",
      userDetails: [userCreate.userEmail, userCreate.userName],
    });
  } catch (error) {
    console.log("Internal Server Error", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// login function
module.exports.loginUser = async (req, res) => {
  const { userName, userPassword } = req.body;
  try {
    // Find the user by username
    const userFind = UserModel.find((user) => user.userName === userName);
    if (!userFind) {
      return res.status(404).json({
        message: `User Not Found With Given userName : ${userName}`,
      });
    }
    // Compare the provided password with the hashed password
    const passwordMatch = await bcryptJs.compare(
      userPassword,
      userFind.userPassword
    );
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid Or Wrong Password",
      });
    }
    // generate token for jwt aauth
    const token = await jwt.sign(
      { userName: userFind.userPassword },
      secreteKey,
      {
        expiresIn: "1h",
      }
    );
    return res.status(200).json({
      message: "Loggedin Successfull , Use This Token For AUTH ROUTES",
      token: token,
    });
  } catch (error) {
    console.log("Internal Server Error", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

// forgot password
module.exports.forgotPassword = async (req, res) => {
  const { userEmail } = req.body;
  if (!userEmail) {
    return res.status(404).json({
      message: "Email Required To reset",
    });
  }
  try {
    // Find the user by email
    const user = UserModel.find((user) => user.userEmail === userEmail);
    if (!user) {
      return res.status(404).json({
        message: "User Not Found With Given Email",
      });
    }
    // Generate a new temporary password
    const tempPassword = Math.random().toString(30).slice(-8);
    // Update the user's password with the temporary password
    const hashedPassword = await bcryptJs.hash(tempPassword, 10);
    user.userPassword = hashedPassword;
    return res.status(200).json({
      message: "Temporary Password Generated ",
      newPassword: hashedPassword,
    });
  } catch (error) {
    console.log("Internal Server Error", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};
