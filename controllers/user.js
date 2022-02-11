const User = require("../models/User");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      username,
      email,
      age,
      description,
      password,
    } = req.body;
    // Chack if email exists
    const emailExists = await User.findOne({ email: email });
    if (emailExists)
      return res.status(400).send("This email is already registered.");

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      first_name: first_name,
      last_name: last_name,
      username: username,
      email: email,
      age: age,
      description: description,
      password: hashPassword,
    });
    res.json({
      data: user.username,
      success: true,
      msg: "User added",
    });
  } catch (err) {
    console.error(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { createUser };
