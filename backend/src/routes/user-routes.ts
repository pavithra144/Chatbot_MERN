import { Router } from "express";
import {
  getAllUsers,
  login,
  signup,
  verifyUser,
  // verifyToken,
} from "../controllers/users.js";
import {
  loginValidator,
  signupValidator,
  validate,
} from "../utils/validations.js";
import { verifyTokens } from "../utils/token-generator.js";

const userRouters = Router();

//userRouters.use('/user')
userRouters.get("/", getAllUsers);
userRouters.post("/signup", validate(signupValidator), signup);
userRouters.post("/login", validate(loginValidator), login);
userRouters.get("/val", verifyTokens, verifyUser);

export default userRouters;
