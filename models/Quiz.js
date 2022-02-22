const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuizSchema = new Schema({
  title: String,
  number: {
    type: number,
    min: 1,
  },
  explanation: String,

  // Order of the questions (ObjectIds) is NOT important. The questions is loaded in a random order in frontend anyway.
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Question",
    },
  ],
  points: number,
  minPassingPercentage: {
    type: number,
    min: 50,
    max: 100,
  },
  tags: [String],
});

module.exports = mongoose.model("Quiz", QuizSchema);
