import jwt from "jsonwebtoken"

export const getJwtAuthUrl = (user) =>{
    if(user){
        console.log()
        const token = jwt.sign({email:user.email},process.env.JWT_SECRET,{expiresIn: 60 * 1000})
        console.log(token)
        return process.env.JWT_ACCESS_TOKEN_URL+token
    
    }else{
        return process.env.JWT_FAIL_AUTH_URL
    }
    
}