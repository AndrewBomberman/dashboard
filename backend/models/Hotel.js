import mongoose from "mongoose";
import { RoomSchema } from "./Room.js";

export const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  description:String,
  phone:String,
  email:String,
  address: {
    address1:String,
    address2:String,
    city: String,
    country: String,
    postcode: String,
  },
  rooms: [RoomSchema],
  thumbnail: String,
  gallery: [String],
  reviews: [],
  bookings: {
    type: Number,
    default: 0,
  },

  rating: {
    type: mongoose.Types.Decimal128,
    default: 0.0,
  },
  display: {
    type: Boolean,
    default: false,
  },
  
})

.pre("remove", { query: false, document: true }, async function (next) {
    await Room.deleteMany({ hotel_id: this._id });
    next();
  });

export default new mongoose.model("Hotel", HotelSchema);
