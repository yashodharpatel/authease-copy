import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import indexRouter from "#routes/index";

import connectDB from "#config/dbConnection";

connectDB();

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(morgan("dev"));

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log("Server started successfully on PORT", PORT);
});