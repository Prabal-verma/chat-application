import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.route.js"  
import dotenv from "dotenv"  
import { connectDB } from "./lib/db.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)

app.listen(PORT,()=>{
  console.log(`server started at port ${PORT}`);
  connectDB();
})