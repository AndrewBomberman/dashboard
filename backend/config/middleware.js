import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  console.log("Middleware")
  if (req.headers.authorization) {
    
    const [token, value] = req.headers.authorization.split(" ");
    if (token === "Bearer" && value !=="undefined") {
      
        console.log(value)
        jwt.verify(value, "secret", async (err, decoded) => {
          if (err) {
            console.log(err);
            next();
          }
          if (decoded) {+
            console.log(decoded.email)
            res.locals.user_email = decoded.email
            next();
        } else {
          res.status(401).json("No Authorization")
        };
        });
          
    } else {
      res.status(401).json("No Authorization")
    };
  } else {
    res.status(401).json("No Authorization")
  };
}

