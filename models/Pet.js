import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  type: {
    type: String,
  },
  name: {
    type: String,
    required: true
  },
  age: {
    type: Date,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    required: true,
    enum:["Macho", "Hembra"]
  },
  creationdate:{
    type: Date,
    required: true,
    trim: true,
},
  lastupdatedate:{
      type: Date,
      required: true,
      trim: true,
  },
  description: {
      type: String,
      required: true
    },
  images: {
      type: String,
      required: true
  },
});


export const Pet = mongoose.model('Pet',petSchema);