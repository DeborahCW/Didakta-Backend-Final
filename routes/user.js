const express = require("express");
const routes = express.Router();
const { createUser } = require("../controllers/user");

routes.post("/register", createUser);

module.exports = routes;
