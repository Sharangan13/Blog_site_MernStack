const express =require("express");
const userSchemaModel = require("../models/userModel");
const { registerUser, loginUser } = require("../controllers/authController");
const { logoutUser } = require("../middlewares/authendicate");

const router = express.Router();

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logoutUser);

module.exports = router;