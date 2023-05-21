import { Router } from "express";
import { checkLogin } from "../controllers/login.controller.js";

const router = Router();

router.post("/login", checkLogin);

export default router;
