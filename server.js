import express from "express";
import studentRoutes from "./src/routes/studentRoutes.js";
import mongoose, { mongo } from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/school");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

studentRoutes(app);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
