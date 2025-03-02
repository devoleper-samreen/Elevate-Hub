import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import connectDB from "./DB/db.js"

// Config env
dotenv.config();

// App initialization
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
}));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));


//DB connection
connectDB();

// Port and Server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});


