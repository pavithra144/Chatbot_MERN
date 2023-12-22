import { Router } from "express";
import userRouters from "./user-routes.js";
import chatRouters from "./chat-routes.js";
const appRouter = Router();
appRouter.use('/user', userRouters);
appRouter.use('/chats', chatRouters);
export default appRouter;
//# sourceMappingURL=index.js.map