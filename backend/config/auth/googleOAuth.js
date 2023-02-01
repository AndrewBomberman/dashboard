import { google } from "googleapis"

const oAuthClient = (client_id, client_secret)=>{
    return new google.auth.OAuth2({
    clientId: client_id, 
    clientSecret: client_secret, 
    redirectUri:"http://localhost:8000/api/v1/auth/google/callback"
})}

export const getGoogleOAuthUrl = () =>{
   
    return oAuthClient(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET).generateAuthUrl({
        access_type:"offline",
        prompt:"consent",
        scope:[
            "https://www.googleapis.com/auth/userinfo.email",
            "https://www.googleapis.com/auth/userinfo.profile"
        ],
        include_granted_scopes:true
    })
}

const accessTokenUrl = ({ accessToken }) =>{
    console.log("Access token: " + accessToken)
   return "https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token="+accessToken
}

export const getGoogleUser = async (code)=>{
    const { tokens } = await oAuthClient(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET).getToken(code)
    return tokens.id_token
}

