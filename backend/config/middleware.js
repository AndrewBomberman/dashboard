import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  console.log(req.headers)
  console.log("Middleware")
  if (req.headers.authorization) {
    console.log(req.headers)
    
    const [token, value] = req.headers.authorization.split(" ");
    if (token === "Bearer" && value !=="undefined") {
      
        console.log(value)
        jwt.verify(value, process.env.JWT_SECRET, async (err, decoded) => {
          if (err) {
            console.log(err);
            next();
          }
          if (decoded) {
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

