import { Router } from "express";
import { login } from "../controllers/user/login.js";
import { register } from "../controllers/user/register.js";

export const userRouter = Router();

userRouter.post("/login", login);
userRouter.post("/register", register);
