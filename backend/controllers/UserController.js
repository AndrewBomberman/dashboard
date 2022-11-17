import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getGoogleOAuthUrl } from "../config/googleOAuth.js";
import { getGoogleUser } from "../config/googleOAuth.js";

const UserController = {
  googleOAuthUrl: (req, res) => {
    res.status(200).json({ url: getGoogleOAuthUrl() });
  },

  googleOAuthCallback: async (req, res) => {
    const { code } = req.query;
    try {
      const info = await getGoogleUser(code);
      const token = createToken(info.email);
      res.cookie("auth", token, { expiresIn: 3 * 24 * 60 * 60 });
      res.redirect("http://localhost:3000/hotels");
    } catch (error) {
      res.redirect("http://localhost:3000/login");
    }
  },
  jwtAuthRegisterUrl: async (req, res) => {
    const user = await User.create(req.body)
    res.status(200).json({ url: getJwtAuthUrl(user) });
  },
  jwtAuthLoginUrl: (req, res) => {
    if (req.query.token) {
      jwt.verify(
        req.query.token,
        process.env.JWT_SECRET,
        async (err, decoded) => {
          const user = await User.findOne(decoded.email);
          if (user) {
          }
        }
      );
    }
  },
  jwtAuthCallback: async (req, res) => {

  },

  logout: async (req, res, next) => {
    res.cookie("auth", "", { expiresIn: 0 });
    res.redirect("http://localhost:3000/login");
  },
};
export default UserController;
