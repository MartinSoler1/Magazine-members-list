const { application } = require("express");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },    

  email: { type: String, required: true },
});



const UserModel = mongoose.model("users", userSchema)
module.exports = UserModel;