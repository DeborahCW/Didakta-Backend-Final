const express = require("express");
const userAuth = express.Router();
const { registerUser } = require("../controllers/registerUser");
const { loginUser } = require("../controllers/loginUser");
// const { getUser } = require("../controllers/getUser");

userAuth.post("/register", registerUser);
userAuth.post("/login", loginUser);
// userAuth.get("/profile", getUser);

module.exports = userAuth;
