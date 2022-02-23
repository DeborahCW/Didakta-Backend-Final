const express = require("express");
const userAuth = express.Router();
const { registerUser } = require("../controllers/registerUser");
const { loginUser } = require("../controllers/loginUser");
const { getAllUsers, getOneUser } = require("../controllers/getUser");

userAuth.get("/user", getAllUsers);
userAuth.get("./user/:id", getOneUser);
userAuth.post("/register", registerUser);
userAuth.post("/login", loginUser);

module.exports = userAuth;
