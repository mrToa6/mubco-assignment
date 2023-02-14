import mongoose from "mongoose";
import classSchema from "../models/classModel.js";
import studentSchema from "../models/studentsModel.js";

const Class = mongoose.model("class", classSchema);
const Student = mongoose.model("student", studentSchema);

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

// delete class with all the students in the class
export function deleteClass(req, res) {
  Class.findOne({ classNumber: req.params.num }, (error, oneclass) => {
    if (oneclass) {
      const classNo = oneclass.classNumber;
      Student.deleteMany({ class: classNo }, (error, student) => {
        if (error) {
          console.log(error);
        } else {
          Class.deleteOne(
            { classNumber: req.params.num },
            (error, oneclass) => {
              if (error) {
                console.log(error);
              }
            }
          );
          res.json(oneclass);
        }
      });
    } else {
      res.json({
        status: "fail",
        msg: "There is no class with given number.",
      });
    }
  });
}
