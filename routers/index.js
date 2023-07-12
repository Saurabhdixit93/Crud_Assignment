// import router
const router = require("express").Router();
// import jwt
const { verifyToken } = require("../Configration/JWT_AUTH");
// home for confirmation
router.get("/", (req, res) => {
  return res.status(200).json({
    HomePage: "Site Working Successfully",
  });
});

// post route
router.use("/post", verifyToken, require("./PostRoutes"));
// user route
router.use("/user", require("./UserRoutes"));
// export for global
module.exports = router;
