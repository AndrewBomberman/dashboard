import express from "express";
import googleOAuthController from "../../controllers/auth/googleOAuthController.js";
import jwtAuthController from "../../controllers/auth/jwtAuthController.js";
const authRoutes = express.Router();
//Google Auth
authRoutes.get("/google/url", googleOAuthController.googleOAuthUrl);
authRoutes.get("/google/callback", googleOAuthController.googleOAuthCallback);

//JWt Auth+
authRoutes.post("/jwt/register", jwtAuthController.jwtAuthRegisterUrl);
authRoutes.post("/jwt/login", jwtAuthController.jwtAuthLoginUrl);
authRoutes.get("/jwt/callback", jwtAuthController.jwtAuthCallback);
export default authRoutes