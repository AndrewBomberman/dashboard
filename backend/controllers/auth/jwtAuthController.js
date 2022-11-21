import { User } from "../../models/User.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { getJwtAuthUrl } from "../../config/auth/jwtAuth.js"

const jwtAuthController = {
  jwtAuthRegisterUrl: async (req, res) => {
    const user = await User.create(req.body);
    console.log(user)
    res.status(200).json({ url: getJwtAuthUrl(user) });
  },
  jwtAuthLoginUrl: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (bcrypt.compare(user.password, password)) {
        res.status(200).json({ url: getJwtAuthUrl(user) });
    }
    else{
        res.status(200).json({ url: getJwtAuthUrl(user) });
    }
    
  },
  jwtAuthCallback: async (req, res) => {
    if (req.query.token) {
      jwt.verify(
        req.query.token,
        process.env.JWT_SECRET,
        async (err, decoded) => {
          console.log(decoded);
          const user = await User.findOne({email:decoded.email});
          if (user) {
            res.cookie("auth",req.query.token,{ expiresIn: 60 * 60 * 1000})
            res.redirect("http://localhost:3000/hotels");
          } else {
            res.redirect("http://localhost:3000/login");
          }
        }
      );
    } else {
      res.redirect("http://localhost:3000/login");
    }
  },
};
export default jwtAuthController