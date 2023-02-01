import { getGoogleOAuthUrl, getGoogleUser } from "../../config/auth/googleOAuth.js";
import { User } from "../../models/User.js";


const googleOAuthController = {
    googleOAuthUrl: (req, res) => {
        res.status(200).json({ url: getGoogleOAuthUrl() });
      },
    
      googleOAuthCallback: async (req, res) => {
        const { code } = req.query;
        try {
          const token = await getGoogleUser(code);
          res.cookie("auth", token, { expiresIn: 3 * 24 * 60 * 60 });
          res.redirect("http://localhost:3000/hotels");
        } catch (error) {
          res.redirect("http://localhost:3000/login");
        }
      },
}
export default googleOAuthController;