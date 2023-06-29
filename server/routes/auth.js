import express from "express";
import { register } from "../controllers/auth.js";
import bodyParser from "body-parser";
const router = express.Router();
router.post("/register", bodyParser.json(), register);
//router.post("/login", login);

export default router;
