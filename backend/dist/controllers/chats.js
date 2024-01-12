import User from "../models/User.js";
import { openaiConfig } from "../config/openai-config.js";
import { OpenAIApi } from "openai";
export const getAllChats = async (req, res, next) => {
    try {
        const { message } = req.body;
        const user = await User.findById(res.locals.jwtData);
        if (!user)
            return res.status(401).send("Token Malfunctioned");
        const chats = user.chats.map(({ content, role }) => ({
            role,
            content,
        }));
        chats.push({ content: message, role: "user" });
        user.chats.push({ content: message, role: "user" });
        const config = openaiConfig();
        const openai = new OpenAIApi(config);
        const chatResponse = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: chats,
        });
        user.chats.push(chatResponse.data.choices[0].message);
        await user.save();
        return res.send(200).json({ chats: user.chats });
    }
    catch (error) {
        return res.status(500).json({ message: "error", cause: error.message });
    }
};
//# sourceMappingURL=chats.js.map