const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  chapterNumber: Number,
  quizNumber: Number,
  title: String,
  text: [String],
  table: [[String]],
  text_1: String,
  alignment: String,
  answers: [String],
  correctAnswer: Number,
  answers_1: [String],
  correctAnswer_1: Number,
  tags: [
    {
      type: String,
      required: [true, "tags: dropDown, multipleChoice"],
      enum: ["dropDown", "multipleChoice"],
    },
  ],
});

module.exports = mongoose.model("Question", QuestionSchema);
