import express from "express";
import RoomController from "../../controllers/RoomController.js";
const roomRoutes = express.Router();
//Room Routes
roomRoutes.get("/", RoomController.get);
roomRoutes.post("/", RoomController.add);
roomRoutes.delete("/", RoomController.delete);
roomRoutes.put("/name", RoomController.updateRoomName);
roomRoutes.put("/description", RoomController.updateRoomDescription);
roomRoutes.put("/thumbnail", RoomController.updateRoomThumbnail);
roomRoutes.put("/gallery", RoomController.updateRoomGallery);

export default roomRoutes;
