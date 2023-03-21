import express from "express";
import HotelController from "../controllers/HotelController.js";
import RoomController from "../controllers/RoomController.js";
import googleOAuthController from "../controllers/auth/googleOAuthController.js";
import jwtAuthController from "../controllers/auth/jwtAuthController.js";
import middleware from "./middleware.js";

const router = express.Router();


//Google Auth
router.get("/auth/google/url", googleOAuthController.googleOAuthUrl);
router.get("/auth/google/callback", googleOAuthController.googleOAuthCallback);

//JWt Auth+
router.post("/auth/jwt/register", jwtAuthController.jwtAuthRegisterUrl);
router.post("/auth/jwt/login", jwtAuthController.jwtAuthLoginUrl);
router.get("/auth/jwt/callback", jwtAuthController.jwtAuthCallback);

//Hotel Routes

router.get("/hotels",HotelController.get);
router.post("/hotels",HotelController.add);
router.delete("/hotels",HotelController.delete);
router.put("/hotels/name", HotelController.updateName)
router.put("/hotels/description", HotelController.updateDescription)
router.put("/hotels/email", HotelController.updateEmail)
router.put("/hotels/phone", HotelController.updatePhone)
router.put("/hotels/address1", HotelController.updateAddress1)
router.put("/hotels/address2", HotelController.updateAddress2)
router.put("/hotels/city", HotelController.updateHotelCity)
router.put("/hotels/country", HotelController.updateHotelCountry)
router.put("/hotels/thumbnail", HotelController.updateHotelThumbnail)
router.put("/hotels/gallery", HotelController.updateHotelGallery)

//Room Routes
router.get("/rooms",middleware, RoomController.get);
router.post("/rooms", middleware,RoomController.add);
router.put("/rooms",middleware, RoomController.edit);
router.delete("/rooms",middleware, RoomController.delete);

export default router;
