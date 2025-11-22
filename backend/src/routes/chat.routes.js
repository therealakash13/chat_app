import { Router } from "express";
import { createChat, getChat } from "../controllers/chat.controller.js";

const router = Router();

router.post("/", createChat);
router.get("/", getChat);

export default router;
