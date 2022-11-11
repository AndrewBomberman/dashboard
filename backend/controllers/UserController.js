import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (id) => {
  return jwt.sign({ id }, "secret", {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
const UserController = {
  register: async (req, res) => {
   
    try {
      const user = await User.create(req.body);
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true, expiresIn: 3 * 24 * 60 * 60 });
      res.status(200).json(token);
    } catch (error) {
      res.status(400).json(error);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email: email });
      await bcrypt.compare(password, user.password);
      const token = createToken(user._id);
      res.cookie("jwt", token, { httpOnly: true, expiresIn: 3 * 24 * 60 * 60 });
      res.status(200).json(token);
    } catch (error) {
      res.status(400).json(error);
    }
  },
};
export default UserController;
