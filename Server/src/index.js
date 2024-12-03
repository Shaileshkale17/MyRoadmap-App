import express from "express";
import os from "os";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { CreateConnection } from "./Database/index.js";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import cluster from "cluster";
import router from "./router/user.routes.js";

dotenv.config();

// Temporary in-memory storage for posts
const posts = [];

if (cluster.isMaster) {
  const numberCPUs = os.cpus().length;
  console.log(`Primary process ${process.pid} is running`);
  for (let i = 0; i < numberCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);
    cluster.fork(); // Restart worker
  });
} else {
  // Worker processes
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(
    cors({
      origin: process.env.ORIGIN || "*", // Fallback to allow any origin
    })
  );

  const httpServer = createServer(app); // Attach app to the HTTP server

  const io = new Server(httpServer, {
    cors: {
      origin: process.env.ORIGIN || "*", // Fallback to allow any origin
    },
  });
  // test routes
  app.get("/api", function (req, res) {
    res.status(200).json({ message: "testing server response " });
  });
  // Root endpoint
  app.use("/api", router);
  // Socket.IO setup
  io.on("connection", (socket) => {
    console.log(`Socket connected: ${socket.id}`);
    socket.emit("hello", "world!");
  });

  // Database connection and server startup
  CreateConnection()
    .then(() => {
      const port = process.env.PORT || 3000;
      httpServer.listen(port, () => {
        console.log(`Worker ${process.pid} listening on port ${port}`);
      });
    })
    .catch((err) => {
      console.error(`Database connection error: ${err.message}`);
    });

  const socketPort = process.env.SOCKET_PORT || 3001;
  io.listen(socketPort, () => {
    console.log(`Socket.IO listening on port ${socketPort}`);
  });
}
