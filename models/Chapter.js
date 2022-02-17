const { Grid, Link } = require("@mui/material");
const mongoose = require("mongoose");

const { Schema } = mongoose;

const ChapterSchema = new Schema({
  chapter_id: {
    type: Number,
    required: [true, "This field is required"]
  },
  chapter_no: {
    type: Number,
    required: [true, "This field is required"]
  },
  text: {
    type: String,
    required: [true, "This field is required"],
  },
  audio: {
    type: String, //Gridfs ? uncertain
  },
  audio_link: {
    type: String,
  },
  Table: {
    type: Object,
  },
  youtube_link: {
    type: String,
  },
  q_a: {
    type: Object,
  },
  img_url: {
    type: String,
  },
  alignment_url: {
    type: String,
  },
  
});

module.exports = mongoose.model("Chapter", ChapterSchema);
