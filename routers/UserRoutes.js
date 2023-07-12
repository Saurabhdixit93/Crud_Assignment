const express = require("express");
const router = express.Router();
// importing controller
const userController = require("../controllers/UserController");

// user controller with routes
router.post("/signup", userController.createUser);
router.post("/login", userController.loginUser);
router.post("/reset-password", userController.forgotPassword);

// exporting routes
module.exports = router;
