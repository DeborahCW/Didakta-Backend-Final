const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuestionSchema = new Schema({
  question: {
    type: String,
    required: [true, "This field is required"],
  },
  answers: {
    type: Array,
    required: [true, "This field is required"],
  },
  correctAnswer: {
    type: Number,
  },
  tags: [String],
});

module.exports = mongoose.model("Question", QuestionSchema);
