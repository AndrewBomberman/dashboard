import express from "express";
import HotelController from "../controllers/HotelController.js";
import RoomController from "../controllers/RoomController.js";
import UserController from "../controllers/UserController.js";

import { getJwtAuthUrl } from "./jwtAuth.js"
import { auth } from "./middleware.js";
import jwt from "jsonwebtoken";


const router = express.Router();
//Google Auth
router.get("/auth/google/url", UserController.googleOAuthUrl)
router.get("/auth/google/callback", UserController.googleOAuthCallback)

//JWt Auth
router.post("/auth/jwt/register", UserController.jwtAuthRegisterUrl)
router.post("/auth/jwt/login", UserController.jwtAuthLoginUrl)
router.get("/auth/jwt/callback", UserController.jwtAuthCallback)

//Hotel Routes
router.get("/hotels", auth, HotelController.get);
router.post("/hotels", auth, HotelController.add);
router.put("/hotels", auth, HotelController.edit);
router.delete("/hotels", auth ,HotelController.delete);

//Room Routes
router.get("/rooms", RoomController.get);
router.post("/rooms", RoomController.add);
router.put("/rooms", RoomController.edit);
router.delete("/rooms", RoomController.delete);







export default router;
