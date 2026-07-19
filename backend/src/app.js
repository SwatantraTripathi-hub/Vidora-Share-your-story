import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"
import userRouter from "./Routes/user.routes.js"
dotenv.config();
const app = express();

app.use(cors({
  origin: process.env.CORS_URL,
  credentials: true,
}));

app.use(cookieParser())

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));





// user_router  http://localhost:3000/api/v1/users/
app.use("/api/v1/users",userRouter)








export default app