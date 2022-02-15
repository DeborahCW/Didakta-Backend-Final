const User = require("../models/User");
const bcrypt = require("bcryptjs");

const registerUser = async (req, res) => {
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

    // chack if email already exists
    const emailExists = await User.findOne({ email: email });
    if (emailExists)
      return res.status(400).send("This email is already registered.");

    // check if the username already exists
    const usernameExists = await User.findOne({ username: username });
    if (usernameExists)
      return res
        .status(400)
        .send("Username already registered. Use another username.");

    // check if password matches with RegExp
    const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
    let rightPassPattern = regex.test(password);
    if (!rightPassPattern)
      return res
        .status(400)
        .send(
          "Password must have: 1.Between 6 and 20 characters 2.At least one uppercase character 3.At least one lowercase character"
        );

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // creating the user
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

module.exports = { registerUser };
