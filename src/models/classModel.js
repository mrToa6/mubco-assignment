import mongoose from "mongoose";

const Schema = mongoose.Schema;

const classSchema = new Schema({
  classNumber: {
    type: Number,
    required: "Class number required.",
    unique: true,
  },
  studentCount: {
    type: Number,
    default: 0,
  },
});

export default classSchema;
