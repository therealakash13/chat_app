import http from "http";
import app from "./src/app.js";
import { Server } from "socket.io";
import dotenv from "dotenv";
import chatSocket from "./src/sockets/socket.js";
dotenv.config();

const server = http.createServer(app); // new http server created

// new socket_io instance created
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

const port = process.env.PORT || 3000;

// socket_io connection events
chatSocket(io);

// start listening on port with http server instance not express instance
server.listen(port, () =>
  console.log(`Server is listening on http://localhost:${port}`)
);
