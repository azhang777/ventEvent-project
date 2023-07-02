import express from "express";
import { getUser } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

/*
import controller methods from users.js and middleware*/
//CREATE
router.get("/:id", verifyToken, getUser);
//READ

//UPDATE

//DELETE

export default router;
