import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export const auth = (req, res, next) => {
  console.log(req.headers)
  console.log(req.headers.authorization);
  const [token, value] = req.headers.authorization.split(" ");
  if (req.headers.authorization) {
    if (token === "Bearer") {
      jwt.verify(value, "secret", async (err, decoded) => {
        if (err) {
          console.log(err);
          next();
        }
        if (decoded.id) {
          console.log(decoded)
          res.locals.user = await User.findById(decoded.id);
          next();
        } else {
          res.status(401).json("No Auth");
        }
      });
    } else {
      res.status(401).json("No Auth");
    }
  } else {
    res.status(401).json("No Auth");
  }
}

