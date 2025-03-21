import express from "express";

import dotenv from "dotenv";
 import cookieParser from "cookie-parser";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import cors from "cors";
const app = express();
dotenv.config();


const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use(cors ({
     origin:"http://localhost:5173",
      credentials:true,
})
);
app.listen(PORT, () => {
  console.log("server is running on port:" + PORT);
  connectDB();
});
