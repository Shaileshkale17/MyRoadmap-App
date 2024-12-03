import express from "express";
import os from "os";
import bodyparser from "body-parser";
import dotenv from "dotenv";
import { CreateConnection } from "./Database/index.js";
import { Server } from "socket.io";
import { createServer } from "http";
import cors from "cors";
import cluster from "cluster";
import { sign } from "crypto";
dotenv.config();

if (cluster.isPrimary) {
  const numberCPUs = os.cpus().length;
  console.log(`Primary process ${process.pid} is running`);
  for (let i = 0; i < numberCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`);

    cluster.fork();
  });
} else {
  // Worker processes
  const app = express();
  app.use(bodyparser.json());
  app.use(
    cors({
      origin: process.env.ORIGIN,
    })
  );

  const httpServer = createServer();

  const io = new Server(httpServer, {
    cors: {
      origin: process.env.ORIGIN,
    },
  });

  io.on("connection", (socket) => {
    socket.emit("hello", "world !");
  });

  CreateConnection()
    .then(() => {
      httpServer.listen(process.env.PORT || 3000, () => {
        console.log(
          `Worker ${process.pid} listening on port ${process.env.PORT}`
        );
      });
    })
    .catch((err) => {
      console.log(`connection error: ${err.messsage}`);
    });
  io.listen(process.env.SOCKET_PORT, (err) => {
    console.log(`listening on ${process.env.SOCKET_PORT}`);
    console.log(`Errors  on ${err}`);
  });
}
