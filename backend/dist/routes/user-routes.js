import { Router } from "express";
import { getAllUsers, login, signup } from "../controllers/users.js";
import { loginValidator, signupValidator, validate } from "../utils/validations.js";
const userRouters = Router();
//userRouters.use('/user')
userRouters.get('/', getAllUsers);
userRouters.post("/signup", validate(signupValidator), signup);
userRouters.post("/login", validate(loginValidator), login);
export default userRouters;
//# sourceMappingURL=user-routes.js.map