import jwt from "jsonwebtoken";

/*
  The Middleware first verifies the presence of an authorization token in the request header.
  Next, it verifies the token's authenticity and extracts the user data from the token.
  Depending the validity of the token the API access is granted or denied.
*/

import { User } from "../models/User.js"
export default (req, res, next) => {
  const token = req.headers.authorization
  if(token){ // Verifies if the access token is present in the request header
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => { // Verifies the authenticity of the token
      if(err){
        res.status(401).json({message: "Invalid token"})
      }else{
        if(await User.findOne({email: decodedToken.email})){ // Verifies if the user exists in the database
          next()
        }
        else{
          res.status(401).json({message: "Invalid token"})
        }
      }
    })
  }
  else{
    res.status(401).json({message: "No token provided"})
  }
}

