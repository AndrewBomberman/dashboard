import express from "express";
import cors from "cors";
import router from "./router.js"

const server = express();
server.use(express.json());
server.use(cors());
server.use("/api/v1",router)

export default server;