const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  first: {
    type: String,
    required: [true, "This filed is required"],
    minlength: [2, "Minimum characters for this field is 2"],
    maxlength: [30, "Maximum characters for this field is 30"],
  },
  last: {
    type: String,
    required: [true, "This filed is required"],
    minlength: [2, "Minimum characters for this field is 2"],
    maxlength: [30, "Maximum characters for this field is 30"],
  },
  email: {
    type: String,
    required: [true, "This filed is required"],
    unique: [true, "Email already registered"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email address",
    ],
  },
  username: {
    type: String,
    required: [true, "This field is required"],
    unique: [true, "Username already registered"],
    minlength: [5, "Minimum characters for this field is 5"],
    maxlength: [30, "Maximum characters for this field is 30"],
  },
  age: {
    type: Number,
    min: 5,
    max: 120,
  },
  description: {
    type: String,
    maxlength: [250, "Maximum characters for this field is 250"],
  },
  password: {
    type: String,
    required: [true, "This field is required"],
  },
  regDate: {
    type: Date,
    default: Date.now,
  },
  quizProgress: [
    {
      score: {
        type: number,
        min: 0,
        max: 100,
      },
      points: number,
      quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Quiz",
      },
    },
  ],
  lessonProgress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Lesson",
  },
  chapterProgress: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
  },
});

module.exports = mongoose.model("User", UserSchema);
