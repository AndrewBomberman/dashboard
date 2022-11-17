import mongoose from "mongoose";
import { RoomSchema } from "./Room.js";
import { User } from "./User.js";
export const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  address: {
    street: {
      type: String,
      required: [false, "Please enter a street address"],
    },
    post_code: {
      type: String,
      required: [false, "Please enter a post code"],
    },
  },
  rooms: [RoomSchema],
  main_image: {
    data: Buffer,
    content_type: String,
  },
  thumbnail: {
    type: String,
    default: "No Thumbnail",
  },
  image_gallery: {
    type: [String],
    default: [],
  },
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
  user_id:mongoose.Types.ObjectId
})
  .pre("save", async function (next) {
    
    next();
  })
  .pre("remove", { query: false, document: true }, async function (next) {
    await Room.deleteMany({ hotel_id: this._id });
    next();
  });

export default new mongoose.model("Hotel", HotelSchema);
