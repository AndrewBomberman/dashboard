import mongoose from "mongoose";
import Hotel from "./Hotel.js";

export const RoomSchema = new mongoose.Schema({
  name:{
    type:String,
    required:[true, "Please enter a room name"]
  },
  description:String,
  nr_beds: {
    type: Number,
    required: [true, "Please enter the number of beds"],
  },
  nr_bathrooms: {
    type: Number,
    required: [true, "Please enter the number of beds"],
  },
  price_per_night: {
    type: mongoose.Types.Decimal128,
    required: [true, "Please set a price per night"],
  },
  available:{
    type: Boolean,
    default:false,
  },
  displayed:{
    type: Boolean,
    default: false,
  },
  thumbnail: String,
  image_gallery: [String],
  facilities: [String],
  hotel_id: mongoose.Types.ObjectId,
  
}).pre("save", async function (next) {
  const hotel = await Hotel.findById(this.hotel_id);
  hotel.rooms.push(this);
  await hotel.save();
  next();
});
export const Room = new mongoose.model("Room", RoomSchema);
