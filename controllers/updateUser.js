const User = require("../models/User");
const bcrypt = require("bcryptjs");

// unable to change user's email address
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      first,
      last,
      // username: ???,
      password,
      quizProgress,
      lessonNumber,
      chapterNumber,
    } = req.body;

    // check if password matches with RegExp
    // const regex = await new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/);
    // let rightPassPattern = await regex.test(password);
    // if (!rightPassPattern) {
    //   return res
    //     .status(400)
    //     .send(
    //       "Password must have: 1.Between 6 and 20 characters 2.At least one uppercase character 3.At least one lowercase character 4. At least one number"
    //     );
    // }

    // encrypt the password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // update the user
    quizProgress.push({
      firstTimeScore: firstTimeScore,
      quiz: quizId,
    });
    const user = await User.findByIdAndUpdate(
      id,
      {
        first: first,
        last: last,
        password: hashPassword,
        quizProgress: quizProgress,
        lessonProgress: lessonNumber,
        chapterProgress: chapterNumber,
      },
      { new: true }
    );
    res.json({
      msg: `User with id ${user.id} updated`,
      success: true,
      data: user,
    });
  } catch (err) {
    console.log(err);
    res.json({
      success: false,
      data: err,
    });
  }
};

module.exports = { updateUser };
