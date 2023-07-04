import mongoose from "mongoose";
import User from "../models/User.js";
//GET USER
export const getUser = async (req, res) => {
  //refactor***
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: "Invalid user ID" });
  }
  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const { password: omit, ...userWithoutPassword } = user.toObject();
    res.status(200).json({ user: userWithoutPassword });
    /*     res.status(200).json({ user }); */
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//UPDATE USER PROFILE

//CHANGE PASSWORD ? ^^

//DELETE USER
