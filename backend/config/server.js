import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./router.js";
import fileUpload from "express-fileupload";


const server = express();
server.use(cors());
server.use(express.json());
server.use(helmet());
server.use(fileUpload({
  limits: { fileSize: 100 * 2048 * 2048 },
}));
server.use("/api/v1/",router);



export default server;
