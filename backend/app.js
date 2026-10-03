import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import apiRoutes from "./routers/index.js";
import errorHandleMiddleware from "./middleware/error.js";
import { uptime } from "process";
import corsOptions from "./config/cors.config.js";

const app = express();

// Apply CORS with options
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

// Parsers & Request Middlewares
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());

// API Routes (all routes mounted under a single entry)
app.use("/api", apiRoutes);

// Error handler (always last route middleware)
app.use(errorHandleMiddleware);

// Health check route
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "Ok",
    uptime: process.uptime(),
  });
});

export default app;
