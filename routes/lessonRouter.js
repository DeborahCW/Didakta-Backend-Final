const express = require("express");
const lessonRouter = express.Router();
const { getAllLessons, getOneLesson } = require("../controllers/getLessons");
const { postOneChapter } = require("../controllers/postChapter");
const { postOneLesson } = require("../controllers/postLesson");
const { postOneQuiz } = require("../controllers/postQuiz");
const { postOneQuestion } = require("../controllers/postQuestion");
const { updateOneLesson } = require("../controllers/updateLesson");
const { updateOneChapter } = require("../controllers/updateChapter");
const { updateOneQuiz } = require("../controllers/updateQuiz");
const { updateOneQuestion } = require("../controllers/updateQuestion");

lessonRouter.get("/", getAllLessons);
lessonRouter.get("/:id", getOneLesson);
lessonRouter.post("/addChapter", postOneChapter);
lessonRouter.post("/addLesson", postOneLesson);
lessonRouter.post("/addQuiz", postOneQuiz);
lessonRouter.post("./addQuestion", postOneQuestion);
lessonRouter.put("./updateLesson", updateOneLesson);
lessonRouter.put("./updateChapter", updateOneChapter);
lessonRouter.put("./updateQuiz", updateOneQuiz);
lessonRouter.put("./updateQuestion", updateOneQuestion);

module.exports = lessonRouter;
