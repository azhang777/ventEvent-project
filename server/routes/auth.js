import express from "express";
import { register, login } from "../controllers/auth.js";
const router = express.Router();

//CREATE
router.get("/register", (req, res) => {
  const responseHtml = "<div>Register route (GET)</div>";
  res.send(responseHtml);
});

router.post("/register", register);

router.get("/login", (req, res) => {
  const responseHtml = "<div>Login route (GET)</div>";
  res.send(responseHtml);
});

router.post("/login", login);

export default router;
