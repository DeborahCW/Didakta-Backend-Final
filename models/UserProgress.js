const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserProgress = new Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  passed_lesson: {
    type: Number,
    default: 1,
  },
  passed_chapter: {
    type: Number,
    default: 1,
  },
  quiz_note: [
    {
      type: Object,
    },
  ],
});
