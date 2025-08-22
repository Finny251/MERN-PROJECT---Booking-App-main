import express from "express";
import { login, register } from "../controllers/auth.js";

const router = express.Router();

<<<<<<< HEAD
router.post("/register", register)
router.post("/login", login)
=======
router.post("/register",register)
router.post("/login",login)
>>>>>>> 895f4278cd300f98295191297723a8c0711282fe

export default router