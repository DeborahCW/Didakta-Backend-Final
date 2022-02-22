const Lesson = require("../models/Lesson");

const getAllLessons = async (req, res) => {
  try {
    const lessons = await Lesson.find().populate("chapters");
    // .populate("chapters.questions")
    // .populate("quiz")
    // .populate("quiz.questions");
    res.json({
      data: lessons,
      msg: "All the lessons",
    });
  } catch (err) {
    console.log(err);
  }
};

const getOneLesson = async (req, res) => {
  try {
    const { id } = req.params;
    const lesson = await Lesson.findById(id);
    res.json({
      data: lesson,
      msg: `Lesson with ID: ${id}`,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllLessons, getOneLesson };
