import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

//REGISTER USER
export const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log("Received request body:", req.body);
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    const salt = await bcrypt.genSalt(); // Provide the number of rounds as an argument (e.g., 10)
    console.log(salt);
    const passwordHash = await bcrypt.hash(password, salt);
    console.log(passwordHash);
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//everything works, in postman you needed to SET THE BODY TO JSON SO IT CAN BE PARSED BY APP...Rough
//LOG USER
