import express from "express";
import http from "http";
import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

const app = express(); // express instance created with name 'app'
const server = http.createServer(app); // new http server created
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
}); // new socket_io instance created
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello from Chat App...");
});

// socket_io connection event
io.on("connection", (socket) => {
  console.log(`A user connected with id: ${socket.id}`);
});

// start listening on port with http server instance not express instance
server.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
