import cluster from "node:cluster";
import { availableParallelism } from "node:os";

const totalCores = availableParallelism();

if (cluster.isPrimary) {
  process.env.UV_THREADPOOL_SIZE = 4;
} else {
  process.env.UV_THREADPOOL_SIZE = Math.min(4, totalCores);
}

import dotenv from "dotenv";
import process from "node:process";
import app from "./app.js";
import connectDB from "./connection/dbConnection.js";

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Server Creation function
const startServer = async () => {
  try {
    // Connect to DB First
    await connectDB(MONGO_URI);

    // Now Start Server
    const server = app.listen(PORT, () => {
      console.log(`Server is Running on port: ${PORT}`);
    });

    // Graceful shutdown on termination
    const shutdown = () => {
      console.log("Shutting down server...");

      server.close(() => {
        console.log("Server closed");
      });
      process.exit(0);
    };

    process.on("SIGINT", shutdown);
    process.on("SIGTERM", shutdown);
  } catch (error) {
    console.error("Failed to start server: ", error);
    process.exit(1);
  }
};

// ============================================================================
// CLUSTER ORCHESTRATION
// ============================================================================
if (cluster.isPrimary) {
  console.log(
    `Primary process ${process.pid} is running. Forking ${totalCores} workers...`,
  );

  // Fork Workers
  for (let i = 0; i < totalCores; i++) {
    cluster.fork();
  }

  // Handle workers chashes and automatically restart replacement workers.
  cluster.on("exit", (worker, code, signal) => {
    console.log(
      `[Alert] Worker ${worker.process.pid} died (Code: ${code}, Signal: ${signal}). Restarting worker...`,
    );
    cluster.fork();
  });
} else {
  // Only worker process will connect and restart the HTTP server
  startServer();
}
