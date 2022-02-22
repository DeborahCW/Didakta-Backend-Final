const mongoose = require("mongoose");

const { Schema } = mongoose;

const ChapterSchema = new Schema({
  title: String,
  number: {
    type: Number,
    required: [true, "Chapter needs  a number"],
    min: 1,
  },
  lessonNumber: Number,
  text: [String],
  audio: String,
  audioText: [String],
  table: [[String]],
  text_1: [String],
  table_1: [[String]],
  youtube: String,

  // Each chapter has optionally one or more questions
  questionText: [String],
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Questions",
    },
  ],
  img: String,
  alignmentText: [String],
  alignment: String,
  footnotes: [String],
});

module.exports = mongoose.model("Chapter", ChapterSchema);
