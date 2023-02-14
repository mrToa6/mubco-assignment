import express from "express";
import studentRoutes from "./src/routes/studentRoutes.js";
import classRoutes from "./src/routes/classRoutes.js";
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/school");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

studentRoutes(app);
classRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
