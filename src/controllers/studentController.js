import mongoose from "mongoose";
import studentSchema from "../models/studentsModel.js";
import classSchema from "../models/classModel.js";

const Student = mongoose.model("student", studentSchema);
const Class = mongoose.model("class", classSchema);

// add new student to database
export function addNewStudent(req, res) {
  const isExists = Class.exists(
    { classNumber: req.body.class },
    function (err, doc) {
      if (doc !== null) {
        Class.findOneAndUpdate(
          { classNumber: req.body.class },
          { $inc: { studentCount: 1 } },
          { new: true },
          (error, oneclass) => {
            if (error) {
              console.log(error);
            }
          }
        );
        let newStudent = new Student(req.body);
        newStudent.save((error, student) => {
          if (error) {
            res.json({ status: "fail", err: error });
          }
          res.json({
            status: "success",
            msg: "New student added succesfully.",
            data: student,
          });
        });
      } else {
        res.json({ status: "fail", msg: "There is no class in given number." });
      }
    }
  );
}

// get all students from students table
export function getAllStudents(req, res) {
  Student.find({}, (error, students) => {
    if (error) {
      res.json(error);
    }
    res.json(students);
  });
}

// get single students based on the student number
export function getStudent(req, res) {
  Student.find({ studentNumber: req.params.num }, (error, student) => {
    if (error) {
      res.json(error);
    }
    res.json(student);
  });
}

// delete student based on the student number
export function deleteStudent(req, res) {
  Student.deleteOne({ studentNumber: req.params.num }, (error, student) => {
    if (error) {
      res.json(error);
    }
    res.json(student);
  });
}
