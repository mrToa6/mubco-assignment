import mongoose from "mongoose";

const Schema = mongoose.Schema;

const classSchema = new Schema({
  number: {
    type: Number,
    unique: true,
  },
  studentCount: {
    type: Number,
  },
});

export default classSchema;
