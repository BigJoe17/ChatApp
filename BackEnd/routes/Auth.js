import { Router } from "express";
import { logout, signup, login } from "../controllers/auth-controllers.js";
const router = Router();

router.post("/login", login);

router.post("/signup", signup);

router.post("/logout", logout);

export default router;
