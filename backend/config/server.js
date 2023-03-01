import express from "express";
import cors from "cors";
import helmet from "helmet";
import router from "./router.js";
import fileUpload from "express-fileupload";
import middleware from "./middleware.js";



const server = express();
server.use(cors());
server.use("/images", express.static("images"))
server.use(express.json());
server.use(helmet());
server.use(fileUpload({
  createParentPath: true,
  limits: { fileSize: 5 * 1024 * 1024 },
  debug:true,
}));
server.use("/api/v1/",router);

export default server;
