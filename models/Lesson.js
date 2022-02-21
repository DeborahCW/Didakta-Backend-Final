const mongoose = require("mongoose");

const { Schema } = mongoose;

const LessonSchema = new Schema({
  title: {
    type: String,
  },
  number: {
    type: Number,
    required: [true, "Lesson needs a number"],
    min: 1,
    max: 100,
  },
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
    },
  ],
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
});

module.exports = mongoose.model("Lesson", LessonSchema);
