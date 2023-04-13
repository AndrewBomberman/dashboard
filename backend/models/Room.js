import mongoose from "mongoose";
import Hotel from "./Hotel.js";

export const RoomSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, "Please enter a room name"]
  },
  description:{
    type: String,
    default:""
  },
  nr_beds: {
    type: Number,
    default:0
  },
  nr_bathrooms: {
    type: Number,
    default:0
  },
  price_per_night: {
    type: mongoose.Types.Decimal128,
    default:0.0
  },
  available:{
    type: Boolean,
    default:false,
  },
  displayed:{
    type: Boolean,
    default: false,
  },
  thumbnail: {
    type: String,
    default:"http://localhost:8000/images/no-image.png"
  },
  gallery: {
    type:[String],
    default:[]
  },
  wifi:{
    type: Boolean,
    default:false,
  },
  tv:{
    type: Boolean,
    default:false,
  },
  room_service:{
    type:Boolean,
    default:false,
  },
  ac:{
    type:Boolean,
    default:false,
  },
  breakfast:{
    type:Boolean,
    default:false,
  },
  hotel_id: mongoose.Types.ObjectId,
  
})
.pre("save", async function (next) {
  console.log(this)
  next();
});
export const Room = new mongoose.model("Room", RoomSchema);
