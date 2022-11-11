import express from "express";
import HotelController from "../controllers/HotelController.js";
import RoomController from "../controllers/RoomController.js";
import UserController from "../controllers/UserController.js";
import { auth } from "./middleware.js";

const router = express.Router();

//Hotel Routes

router.get("/hotels", auth , HotelController.get);
router.post("/hotels", auth, HotelController.add);
router.put("/hotels", auth, HotelController.edit);
router.delete("/hotels", auth, HotelController.delete);

//Room Routes

router.get("/rooms", auth ,RoomController.get);
router.post("/rooms", auth, RoomController.add);
router.put("/rooms", auth, RoomController.edit);
router.delete("/rooms", auth, RoomController.delete);

//User Routes
router.post("/register",UserController.register)
router.post("/login",UserController.login)

export default router;
