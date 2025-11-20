import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello from Chat App...");
});

app.listen(port, () => `Server is listening on http://localhost:${port}`);
