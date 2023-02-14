import mongoose from "mongoose";

const Schema = mongoose.Schema;

const classSchema = new Schema({
  number: {
    type: Number,
    unique: true,
  },
  studentCount: {
    type: Number,
    default: 0,
  },
});

export default classSchema;
