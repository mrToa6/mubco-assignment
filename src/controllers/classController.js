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
      res.json({ status: "fail", err: error });
    } else {
      res.json({ status: "success", data: addedClass });
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
          res.json({ status: "fail", err: error });
        } else {
          Class.deleteOne(
            { classNumber: req.params.num },
            (error, oneclass) => {
              if (error) {
                res.json({ status: "fail", err: error });
              } else {
                res.json({ status: "success", data: oneclass });
              }
            }
          );
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

export function getAllClasses(req, res) {
  Class.find({}, (error, classes) => {
    if (error) {
      res.json({ status: "fail", err: error });
    } else {
      if (classes.length === 0) {
        res.json({ status: "success", msg: "No data available" });
      } else {
        res.json({ status: "success", data: classes });
      }
    }
  });
}

export function getClass(req, res) {
  Class.find({ classNumber: req.params.num }, (error, oneclass) => {
    if (error) {
      res.json({ status: "fail", err: error });
    } else {
      if (oneclass.length === 0) {
        res.json({
          status: "success",
          msg: "There is no class with given number.",
        });
      } else {
        res.json({ status: "success", data: oneclass });
      }
    }
  });
}
