import express from "express";
import HotelController from "../controllers/HotelController.js";
import RoomController from "../controllers/RoomController.js";
import googleOAuthController from "../controllers/auth/googleOAuthController.js";
import jwtAuthController from "../controllers/auth/jwtAuthController.js"
import { auth } from "./middleware.js";




const router = express.Router();
//Test Route
router.post("/test", async function (req, res) {
    
    const thumbnail = req.files.thumbnail
    const gallery = req.files.gallery
    console.log(req.files)
    if(thumbnail){
        await thumbnail.mv("./images/thumbnails/"+thumbnail.name)
    }
    if(gallery && gallery.length>0){
        gallery.forEach(async image => {
            await image.mv("./images/gallery/"+image.name)
        });
    }
   
   
    res.status(200).json({message:"Test"})
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
router.post("/hotels" ,HotelController.add);
router.put("/hotels",  HotelController.edit);
router.delete("/hotels" ,HotelController.delete);

//Room Routes
router.get("/rooms", RoomController.get);
router.post("/rooms", RoomController.add);
router.put("/rooms", RoomController.edit);
router.delete("/rooms", RoomController.delete);







export default router;
