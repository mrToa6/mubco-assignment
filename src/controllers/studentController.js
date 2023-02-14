import mongoose from "mongoose";
import studentSchema from "../models/studentsModel.js";

const Student = mongoose.model("student", studentSchema);

// add new student to database
export function addNewStudent(req, res) {
  let newStudent = new Student(req.body);
  newStudent.save((error, student) => {
    if (error) {
      res.json(error);
    }
    res.json(student);
  });
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
  Student.find({ number: req.params.number }, (error, student) => {
    if (error) {
      res.json(error);
    }
    res.json(student);
  });
}

// delete student based on the student number
export function deleteStudent(req, res) {
  Student.deleteOne({ number: req.params.number }, (error, student) => {
    if (error) {
      res.json(error);
    }
    res.json(student);
  });
}
