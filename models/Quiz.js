const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuizSchema = new Schema({
  title: {
    type: String,
  },
  number: {
    type: number,
    required: [true, "Quiz must have a number"],
    min: 1,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  points: {
    type: number,
  },
  minPassingPercentage: {
    type: number,
    min: 50,
    max: 100,
  },
  tags: [String],
});

module.exports = mongoose.model("Quiz", QuizSchema);
