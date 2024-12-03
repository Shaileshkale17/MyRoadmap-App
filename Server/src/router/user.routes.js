import express from "express";
import {
  chackOTP,
  createUser,
  login,
  otp,
} from "../controllers/user.controller.js";

const router = express.Router();
router.post("/create", createUser);
router.post("/login", login);
router.post("/otp", otp);
router.post("/chackotp/:id", chackOTP);

export default router;
