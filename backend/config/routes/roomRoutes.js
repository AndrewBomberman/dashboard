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
roomRoutes.put("/wifi", RoomController.updateRoomName);
roomRoutes.put("/roomService", RoomController.updateRoomDescription);
roomRoutes.put("/tv", RoomController.updateRoomTv);
roomRoutes.put("/ac", RoomController.updateRoomAc);
roomRoutes.put("/breakfast", RoomController.updateRoomBreakfast);
roomRoutes.put("/wifi", RoomController.updateRoomWifi);

export default roomRoutes;
