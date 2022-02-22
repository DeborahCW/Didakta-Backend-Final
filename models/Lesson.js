const mongoose = require("mongoose");

const { Schema } = mongoose;

const LessonSchema = new Schema({
  title: String,
  number: {
    type: Number,
    required: [true, "Lesson needs a number"],
    min: 1,
    max: 100,
  },

  // Chapters of a lesson is an array of ObjectIds. | ORDER IS IMPORTANT
  chapters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Chapter",
    },
  ],

  // ObjectId of the quiz related to the lesson
  quiz: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Quiz",
  },
});

module.exports = mongoose.model("Lesson", LessonSchema);
