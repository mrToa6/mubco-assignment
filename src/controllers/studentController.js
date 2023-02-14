import mongoose from "mongoose";
import studentSchema from "../models/studentsModel.js";
import classSchema from "../models/classModel.js";

const Student = mongoose.model("student", studentSchema);
const Class = mongoose.model("class", classSchema);

// add new student to database
export function addNewStudent(req, res) {
  Class.exists({ classNumber: req.body.class }, function (err, doc) {
    if (doc !== null) {
      let newStudent = new Student(req.body);
      newStudent.save((error, student) => {
        if (error) {
          res.json({ status: "fail", err: error });
        } else {
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
          res.json({
            status: "success",
            msg: "New student added succesfully.",
            data: student,
          });
        }
      });
    } else {
      res.json({ status: "fail", msg: "There is no class in given number." });
    }
  });
}

// get all students from students table
export function getAllStudents(req, res) {
  Student.find({}, (error, students) => {
    if (error) {
      res.json({ status: "fail", err: error });
    } else {
      if (students.length === 0) {
        res.json({ status: "success", msg: "No data available" });
      } else {
        res.json({ status: "success", data: students });
      }
    }
  });
}

// get single students based on the student number
export function getStudent(req, res) {
  Student.find({ studentNumber: req.params.num }, (error, student) => {
    console.log(student.length === 0);
    if (error) {
      res.json({ status: "fail", err: error });
    } else {
      if (student.length === 0) {
        res.json({
          status: "success",
          msg: "There is no student with given number.",
        });
      } else {
        res.json({ status: "success", data: student });
      }
    }
  });
}

// delete student based on the student number
export function deleteStudent(req, res) {
  Student.findOne({ studentNumber: req.params.num }, (error, student) => {
    if (student) {
      Student.deleteOne({ studentNumber: req.params.num }, (error, student) => {
        if (error) {
          res.json({ status: "fail", err: error });
        } else {
          Class.findOneAndUpdate(
            { classNumber: student.class },
            { $inc: { studentCount: -1 } },
            { new: true },
            (error, oneclass) => {
              if (error) {
                res.json({ status: "fail", err: error });
              } else {
                res.json({ status: "success", data: student });
              }
            }
          );
        }
      });
    } else {
      res.json({
        status: "fail",
        msg: "There is no student with given number.",
      });
    }
  });
}
