import express from "express";
import dotenv from "dotenv";
import ConnectDb from "./db/dbconnect.js";
import Authroutes from "./routes/authroutes.js";
import postroutes from "./routes/postroutes.js";
import cookieParser from "cookie-parser";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
const app = express();
const Port = process.env.Port || 5000;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECURE,
});

app.use(express.json({ limit: "5mb" }));
app.use(cookieParser());

app.use("/api/users", Authroutes);
app.use("/api/posts", postroutes);

app.listen(Port, () => {
  ConnectDb();
  console.log(`connected to your server Port: ${Port}`);
});
