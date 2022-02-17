const mongoose = require("mongoose");

const { Schema } = mongoose;

const LessonSchema = new Schema({
    lesson_no: {
        type: Number,
        required: true
        
      },
   chapter_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter'
    
  },
  quiz_id: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Quiz'
  }],
});
 

module.exports = mongoose.model("Lesson", LessonSchema)