import mongoose, { mongo } from "mongoose";
import studentSchema from "../models/studentsModel.js";
import homeworkSchema from "../models/homeworkModel.js";

const Student = mongoose.model("student", studentSchema);
const Homework = mongoose.model("homework", homeworkSchema);

export function addNewHomework(req, res) {
  Student.findOne(
    { studentNumber: req.body.studentNumber },
    function (err, student) {
      if (student) {
        if (student.homework === "") {
          let newHomework = new Homework(req.body);
          newHomework.save((error, homework) => {
            if (error) {
              res.json({ status: "fail", err: error });
            } else {
              Student.findOneAndUpdate(
                { studentNumber: req.body.studentNumber },
                { homework: req.body.description },
                { new: true },
                (error, student) => {
                  if (error) {
                    res.json({ status: "fail", err: error });
                  } else {
                    res.json({
                      status: "success",
                      msg: "Homework assigned to student",
                      data: student,
                    });
                  }
                }
              );
            }
          });
        } else {
          res.json({ status: "fail", err: "Student already have homework." });
        }
      } else {
        res.json({
          status: "fail",
          err: "There is no student with given number.",
        });
      }
    }
  );
}

export function deleteHomework(req, res) {
  Homework.findOne({ studentNumber: req.params.num }, (error, homework) => {
    if (homework) {
      Homework.deleteOne(
        { studentNumber: req.params.num },
        (error, homework) => {
          if (error) {
            res.json({ error: error });
          } else {
            Student.findOneAndUpdate(
              { studentNumber: req.params.num },
              { homework: "" },
              { new: true },
              (error, student) => {
                if (error) {
                  res.json({ error: error });
                } else {
                  res.json(student);
                }
              }
            );
          }
        }
      );
    } else {
      res.json({
        status: "fail",
        msg: "There is no student with given number.",
      });
    }
  });
}
