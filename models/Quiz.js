const mongoose = require("mongoose");

const { Schema } = mongoose;

const QuizSchema = new Schema({
    question_id: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Question'
  }],
  
});
 

module.exports = mongoose.model("Quiz", QuizSchema)