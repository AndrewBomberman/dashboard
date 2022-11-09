import express from "express";
import fileUpload from "express-fileupload";
import cors from "cors";
import helmet from "helmet";
import router from "./router.js";

const server = express();
server.use(cors());
server.use(express.json());
server.use(
  fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
  })
);
server.use(helmet());
server.use("/api/v1/", router);

export default server;
