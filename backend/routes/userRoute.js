const express =require("express");
const userSchemaModel = require("../models/userModel");
const { registerUser } = require("../controllers/authController");

const router = express.Router();

router.route('/register').post(registerUser);

module.exports = router;