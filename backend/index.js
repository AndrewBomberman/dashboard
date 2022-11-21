import dotenv from "dotenv";
import server from "./config/server.js";
import mongoose from "mongoose";
import Grid from "gridfs-stream";
import { db } from "./config/router.js";

dotenv.config();
const port = process.env.PORT1 || process.env.PORT2;


server.listen(port,() => {
  console.log("Server listening on port " + port)
  db(process.env.DATABASE_URL)
  console.log("Database connection established")
 
  
})
  
