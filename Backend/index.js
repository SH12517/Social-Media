const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRouter = require("./router/user.js");
const PostRouter = require("./router/Post");
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGODB)
  .then(() => console.log("DB connection Sucess"))
  .catch(() => {
    console.log("DB accur some error");
  });
app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/post", PostRouter);
app.listen(5000, () => {
  console.log("Server is running ");
});
