import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  gender: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    default: "",
  },
}, {timestamps: true});

const User = mongoose.model("users", userSchema);

export default User;