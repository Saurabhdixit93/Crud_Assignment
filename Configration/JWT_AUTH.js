const jwt = require("jsonwebtoken");
const secreteKey = process.env.SECRETE_KEY;

// Verify JWT token
module.exports.verifyToken = async (req, res, next) => {
  // Check if Authorization header exists
  if (!req.headers.authorization) {
    return res.status(500).json({
      message: "Please Add Authorization Token",
    });
  }

  const token = req.headers.authorization.split(' ')[1];

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  await jwt.verify(token, secreteKey, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        message: "Failed to authenticate token",
      });
    }
    req.decoded = decoded;
    next();
  });
};
