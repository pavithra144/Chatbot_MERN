import { NextFunction, Request, Response } from "express";
import User from "../models/User.js";
import { compare, genSalt, hash } from "bcrypt";
import { createToken } from "../utils/token-generator.js";
import { cookie_secret_name } from "../utils/constants.js";

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    return res.status(200).json({ message: "OK", users });
  } catch (error) {
    return res.status(200).json({ message: "Error", cause: error.message });
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(200).send("User already registered");

    const salt = await genSalt(10);
    const hashedPassword = await hash(password, salt);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    res.clearCookie("hi", {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true,
    });
    //create token
    const token = createToken(user._id.toString(), user.email, "7d");
    const cookieDate = new Date();
    cookieDate.setDate(cookieDate.getDate() + 7);

    res.cookie("hi", token, {
      path: "/",
      domain: "locahost",
      httpOnly: true,
      expires: cookieDate,
      signed: true,
    });

    return res
      .status(200)
      .json({ message: "ok", name: user.name, email: user.email });
  } catch (error) {
    return res.status(200).json({ message: "Error", cause: error.message });
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).send("User not registered");

    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) return res.status(403).send("incorrect password");

    res.clearCookie(cookie_secret_name, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      signed: true,
    });

    //create new token
    const token = createToken(user._id.toString(), user.email, "7d");
    const cookieDate = new Date();
    cookieDate.setDate(cookieDate.getDate() + 7);

    res.cookie(cookie_secret_name, token, {
      path: "/",
      domain: "localhost",
      httpOnly: true,
      expires: cookieDate,
      signed: true,
    });

    return res
      .status(200)
      .json({ message: "ok", name: user.name, email: user.email });
  } catch (error) {
    return res.status(200).json({ message: "Error", cause: error.message });
  }
};
export const verifyUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("user not registered or Token corrupted");
    }
    console.log(user._id.toString(), "user._id");
    if (user._id !== res.locals.jwtData.id) {
      return res.status(401).send("Not a valid user");
    }
    return res
      .status(200)
      .json({ message: "ok", name: user.name, email: user.email });
  } catch (error) {
    return res.status(401).json({ message: "Error", cause: error.message });
  }
};
