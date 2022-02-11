const userRoutes = require("./routes/user");
const express = require("express");
const app = express();
const connectDB = require("./dbinit");
require("dotenv").config();

connectDB();

const PORT = process.env.PORT || 4000;

app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

app.use("/user", userRoutes);

app.get("/", (req, res) => {
  res.send(`Hey!`);
});

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
