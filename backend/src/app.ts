import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { cookie_secret_name } from "./utils/constants.js";
config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser(cookie_secret_name));
app.use(morgan("dev"));

app.use("/api/v1", appRouter);

export default app;
