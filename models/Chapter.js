const { Grid, Link } = require("@mui/material");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const ChapterSchema = new Schema({
  title: {
    type: String,
  },
  number: {
    type: Number,
    required: [true, "Chapter needs  a number"],
    min: 1,
  },
  text: {
    type: String,
  },
  audio: {
    type: String,
  },
  table: [[String]],
  youtube: {
    type: String,
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Questions",
    },
  ],
  img: {
    type: String,
  },
  alignment: {
    type: String,
  },
});

module.exports = mongoose.model("Chapter", ChapterSchema);
