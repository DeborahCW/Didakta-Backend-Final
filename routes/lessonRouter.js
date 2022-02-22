const express = require("express");
const lessonRouter = express.Router();
const { getAllLessons, getOneLesson } = require("../controllers/getLessons");
const { postOneChapter } = require("../controllers/postChapter");
const { postOneLesson } = require("../controllers/postLesson");

lessonRouter.get("/", getAllLessons);
lessonRouter.get("/:id", getOneLesson);
lessonRouter.post("/addChapter", postOneChapter);
lessonRouter.post("/addLesson", postOneLesson);

module.exports = lessonRouter;
