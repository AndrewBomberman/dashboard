import {
  getGoogleOAuthUrl,
  getGoogleUser,
} from "../../services/auth/googleOAuth.js";
import jwt from "jsonwebtoken";
import { User } from "../../models/User.js";

const googleOAuthController = {
  googleOAuthUrl: (req, res) => {
    const url = getGoogleOAuthUrl()
    res.status(200).json(url);
  },

  googleOAuthCallback: async (req, res) => {
    const { code } = req.query;
    const user = await getGoogleUser(code);
    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
      expiresIn: 60 * 60 * 24 * 1000,
    });
    try {
      res.cookie("auth", token, { expiresIn: 3 * 24 * 60 * 60 });
      await User.create({
        name: user.name,
        email: user.email,
        picture: user.picture,
        password: token,
      });
      res.redirect(process.env.REDIRECT_URL);
    } catch (error) {
      res.redirect(process.env.REDIRECT_URL);
    }
  },
};
export default googleOAuthController;
