import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// UPDATE user
router.put("/:id", verifyUser, updateUser);

// DELETE user
router.delete("/:id", verifyUser, deleteUser);

// GET single user
router.get("/:id", verifyUser, getUser);

// GET all users (admin only)
router.get("/", verifyAdmin, getUsers);

export default router;
