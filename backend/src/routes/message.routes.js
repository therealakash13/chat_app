import { Router } from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";

const router = Router();

router.post("/", sendMessage);
router.get("/:chatId", getMessages);

export default router;