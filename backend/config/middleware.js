import jwt from "jsonwebtoken";

import { User } from "../models/User.js"
export default (req, res, next) => {
  const token = req.headers.authorization
  console.log(token)
  if(token){
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded)=>{
      if(err){
        res.status(401).json("Not Authorized")
      }
      if(decoded){
        if(await User.findOne({email:decoded.email})){
          next()
        }
        else{
          res.status(401).json("Not Authorized")
        }

      }
      else{
        res.status(401).json("Not Authorized")
      }
    })
  }else{
    res.status(401).json("Not Authorized")
  }
  
}

