import { User } from "../../models/User.js"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import jwtTokenGenerator from "../../services/auth/jwtTokenGenerator.js"

const jwtAuthController = {
  jwtAuthRegisterUrl: async (req, res) => {
    const user = await User.create(req.body);
    console.log(user)
    res.status(200).json({ url: jwtTokenGenerator(user) });
  },
  jwtAuthLoginUrl: async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (bcrypt.compare(user.password, password)) {
        res.status(200).json({ url: jwtTokenGenerator(user) });
    }
    else{
        res.status(200).json({ url: jwtTokenGenerator(user) });
    }
    
  },
  jwtAuthCallback: async (req, res) => {
    res.cookie("auth", req.query.token, { expiresIn: 3 * 24 * 60 * 60 });
    res.redirect(process.env.REDIRECT_URL)
  },
};
export default jwtAuthController