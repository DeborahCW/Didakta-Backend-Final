const express = require("express");
const userAuth = express.Router();
const { registerUser } = require("../controllers/registerUser");
const { loginUser } = require("../controllers/loginUser");

userAuth.post("/register", registerUser);
userAuth.post("/login", loginUser);

module.exports = userAuth;
