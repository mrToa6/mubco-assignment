import mongoose from "mongoose";

const Schema = mongoose.Schema;

const studentSchema = new Schema({
  firstName: {
    type: String,
    trim: true,
    required: "Firstname required.",
  },
  lastName: {
    type: String,
    trim: true,
    required: "Firstname required.",
  },
  class: {
    type: Number,
    required: "Class number required.",
  },
  number: {
    type: Number,
    unique: true,
  },
  homework: {
    type: String,
  },
});

export default studentSchema;
