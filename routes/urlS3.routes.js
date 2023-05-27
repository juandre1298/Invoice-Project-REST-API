import { Router } from "express";
import { getUrlForS3 } from "../controllers/getUrlForS3.controller.js";

const router = Router();

router.get("/s3Url", getUrlForS3);

export default router;
