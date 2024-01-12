import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { cookie_secret_name } from "./constants.js";

export const createToken = (id: string, email: string, expiresIn) => {
  const payload = { id, email };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });
  return token;
};

export const verifyTokens = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const getToken = req.signedCookies[`${cookie_secret_name}`];
  if (!getToken || getToken === "")
    return res.status(401).json({ message: "Token not received" });
  return new Promise((resolve, reject) => {
    return jwt.verify(getToken, process.env.JWT_SECRET, (err, success) => {
      if (err) {
        reject(err.message);
        return res.status(401).json({ message: "Token verification failed" });
      } else {
        resolve(success);
        res.locals.jwtData = success;
        next();
      }
    });
  });
};
