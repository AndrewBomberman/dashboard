import jwt from "jsonwebtoken";
import { User } from "../models/User.js";

export default (req, res, next) => {
  const token = req.headers.authorization
  if(token){
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded)=>{
      if(err){
        res.redirect(process.env.FAIL_AUTH_REDIRECT_URL)
      }
      if(decoded){
        const user = await User.findOne({email: decoded.email})
        if(user){
          res.locals = user
          next()
        }
        else{
          res.redirect(process.env.FAIL_AUTH_REDIRECT_URL)
        }
      }
      else{
        res.redirect(process.env.FAIL_AUTH_REDIRECT_URL)
      }
    })
  }else{
    res.redirect(process.env.FAIL_AUTH_REDIRECT_URL)
  }
  
}

