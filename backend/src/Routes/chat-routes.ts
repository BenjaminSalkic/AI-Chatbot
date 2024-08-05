import { Router } from "express";
import { verifyToken } from "../Utils/token-manager.js";
import { chatCompletionValidator, validate } from "../Utils/validators.js";
import { generateChatCompletion } from "../Controllers/chat-controller.js";

const chatRouter = Router();

chatRouter.post('/new',validate(chatCompletionValidator),verifyToken, generateChatCompletion);

export default chatRouter;