import dotenv from "dotenv";
import server from "./config/server.js";
import mongoose from "mongoose";


dotenv.config();
const port = process.env.PORT1 || process.env.PORT2;
server.listen(port, async () => {
  console.log("Server listening on port " + port);
  mongoose.connect(process.env.DATABASE_URL).then(() => {
    console.log("Database connection established")
  })
});

  
