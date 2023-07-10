import express from "express";
import { getUser, getAllUsers, deleteUser } from "../controllers/users.js";
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

/*
import controller methods from users.js and middleware*/
//CREATE
//READ
router.get("/:id", verifyToken, getUser);
router.get("/", verifyToken, getAllUsers);
//UPDATE

//DELETE
router.delete("/:id/delete", verifyToken, deleteUser);
export default router;
