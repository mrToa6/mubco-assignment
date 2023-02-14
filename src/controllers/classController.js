import mongoose from "mongoose";
import classSchema from "../models/classModel.js";

const Class = mongoose.model("class", classSchema);

// add new class number to database
export function addNewClass(req, res) {
  let newClass = new Class(req.body);
  newClass.save((error, addedClass) => {
    if (error) {
      res.json(error);
    } else {
      res.json(addedClass);
    }
  });
}
