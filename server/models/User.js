import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  isMatching: {
    type: Boolean,
    default: false,
  },
  matchStatus: {
    type: String,
    enum: ["not matching", "pending", "matched"],
    default: "not matching",
  },
});

const User = mongoose.model("User", UserSchema);
export default User;
