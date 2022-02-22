const userAuth = require("./routes/userAuth");
const lessonRouter = require("./routes/lessonRouter");
const express = require("express");
const app = express();
const connectDB = require("./dbinit");
require("dotenv").config();
app.use(
  express.urlencoded({
    extended: false,
  })
);
const PORT = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use("/user", userAuth);
app.use("/lesson", lessonRouter);

app.get("/", (req, res) => {
  res.send(`Didakta is a platform for learning ancient greek language.`);
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
