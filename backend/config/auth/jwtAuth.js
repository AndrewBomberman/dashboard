import jwt from "jsonwebtoken"

export const getJwtAuthUrl = (user) =>{
    if(user){
        return process.env.JWT_ACCESS_TOKEN_URL+jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn: 60 * 1000})
    }
    else{
        return process.env.JWT_FAIL_AUTH_URL
    }
    
}