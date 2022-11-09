import express from "express";
import HotelController from "../controllers/HotelController.js";
import RoomController from "../controllers/RoomController.js";

const router = express.Router();

//Hotel Routes

router.get("/hotels", HotelController.get);
router.post("/hotels", HotelController.add);
router.put("/hotels", HotelController.edit);
router.delete("/hotels", HotelController.delete);

//Room Routes

router.get("/rooms", RoomController.get);
router.post("/rooms", RoomController.add);
router.put("/rooms", RoomController.edit);
router.delete("/rooms", RoomController.delete);

export default router;
