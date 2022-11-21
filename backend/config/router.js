import express from "express";
import HotelController from "../controllers/HotelController.js";
import RoomController from "../controllers/RoomController.js";
import googleOAuthController from "../controllers/auth/googleOAuthController.js";
import jwtAuthController from "../controllers/auth/jwtAuthController.js"
import { auth } from "./middleware.js";
import Grid from "gridfs-stream";
import{ GridFsStorage} from "multer-gridfs-storage"
import multer from "multer"
import mongoose from "mongoose";
import crypto from "crypto";

export const db = (url)=>{
    mongoose.connect(url)
}
const GridStore = mongoose.mongo.GridFSBucket





const router = express.Router();
//Test Route
router.post("/test",function (req, res) {
    
    
})

//Google Auth
router.get("/auth/google/url", googleOAuthController.googleOAuthUrl)
router.get("/auth/google/callback", googleOAuthController.googleOAuthCallback)

//JWt Auth+
router.post("/auth/jwt/register", jwtAuthController.jwtAuthRegisterUrl)
router.post("/auth/jwt/login", jwtAuthController.jwtAuthLoginUrl)
router.get("/auth/jwt/callback", jwtAuthController.jwtAuthCallback)

//Hotel Routes
router.get("/hotels",  HotelController.get);
router.post("/hotels",HotelController.add);
router.put("/hotels",  HotelController.edit);
router.delete("/hotels", auth ,HotelController.delete);

//Room Routes
router.get("/rooms", RoomController.get);
router.post("/rooms", RoomController.add);
router.put("/rooms", RoomController.edit);
router.delete("/rooms", RoomController.delete);







export default router;
