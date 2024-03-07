const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    position: {
      type: String,
    },
    classs: {
      type: String,
    },
    subject: {
      type: String,
    },
    course: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    photo: {
      type: String,
    },
    answers:{
        type:[]
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("question", questionSchema);
