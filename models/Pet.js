import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true
  },
  breed:{
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    enum:["Macho", "Hembra"]
  },
  description: {
      type: String,
      required: true
    },
  images: {
      type: [String],
      required: true
  },
  owner: {
    type: String,
    required: true
  },
});


export const Pet = mongoose.model('Pet', petSchema);