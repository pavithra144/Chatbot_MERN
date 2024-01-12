import { Router } from "express";
import { verifyTokens } from "../utils/token-generator.js";
import { chatValidator, validate } from "../utils/validations.js";
import { getAllChats } from "../controllers/chats.js";

const chatRouters = Router();

//since its a protected route, and only logged in users need to access chats, we are verifying token
chatRouters.post("/new", validate(chatValidator), verifyTokens, getAllChats);

export default chatRouters;
