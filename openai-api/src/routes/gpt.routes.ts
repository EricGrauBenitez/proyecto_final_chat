import { Router } from "express";
import { handleGptAnswer } from "../controllers";

const router = Router();

router.post("/", handleGptAnswer);

export { router };
