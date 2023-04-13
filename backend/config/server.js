import express from "express";
import cors from "cors";
import helmet from "helmet";
import fileUpload from "express-fileupload";
import hotelRoutes from "./routes/hotelRoutes.js";
import roomRoutes from "./routes/roomRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import middleware from "./middleware.js";
import bookingRoutes from "./routes/bookingRoutes.js"

/*
  The following file contains the server configuration.
  The server is configured to use cors, helmet, express-fileupload and express.
  The server is also configured to use the routes and middleware.
  The server is also configured to use a statc folder for images.
  The server is exported to be used in the index.js file.

*/


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
server.use("/api/v1/hotels",middleware, hotelRoutes);
server.use("/api/v1/rooms", middleware, roomRoutes);
server.use("/api/v1/bookings", bookingRoutes);
server.use("/api/v1/auth", authRoutes);

export default server;
