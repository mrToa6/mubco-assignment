import mongoose from "mongoose";

const Schema = mongoose.Schema;

const homeworkSchema = new Schema({
  studentNumber: {
    type: Number,
    required: "Student number required.",
  },
  description: {
    type: String,
    required: "Homework description required.",
  },
});

export default homeworkSchema;
