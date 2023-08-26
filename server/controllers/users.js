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
    const { password: omit, ...userNoPasword } = user.toObject();
    res.status(200).json({ user: userNoPasword });
    /*     res.status(200).json({ user }); */
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (!users || users.length === 0) {
      return res.status(401).json({ message: "No users found" });
    }

    const usersNoPassword = users.map((user) => {
      const { password, ...userNoPassword } = user.toObject();
      return userNoPassword;
    });
    res.status(200).json({ users: usersNoPassword });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
//UPDATE USER PROFILE

//CHANGE PASSWORD ? ^^

//DELETE USER

export const deleteUser = async (req, res) => {
  try {
    const authenticatedUserId = req.user.id;
    const userIdToDelete = req.params.id;

    if (authenticatedUserId !== userIdToDelete) {
      return res
        .status(403)
        .json({ message: "Unauathorized access, cannot delete user" });
    }

    //we should check if the correct userID exist in the database
    const deletedUser = await User.findByIdAndDelete(userIdToDelete);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//refactor? delete the token along with the user?

/* When generating the JWT token during user authentication, include a unique identifier 
(e.g., a "token version" or "issued at" timestamp) as part of the token payload.

Store this unique identifier or token version in the user document in the database, 
associating it with the user's token.

When a user's document is deleted from the database, update the user's document to remove 
the token version or set it to a revoked status.

In your application's authentication middleware or token verification logic, after verifying
 the token's signature, also check if the token version is valid or revoked.

If the token version is invalid or revoked, deny access or consider the token as expired. */
