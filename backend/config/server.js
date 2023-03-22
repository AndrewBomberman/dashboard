import express from "express";
import cors from "cors";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import hotelRoutes from "./routes/hotelRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import authRoutes from "./routes/authRoutes.js"
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
server.use("/api/v1/hotels", middleware, hotelRoutes);
server.use("/api/v1/rooms", middleware, roomRoutes);
server.use("/api/v1/", authRoutes);

export default server;
