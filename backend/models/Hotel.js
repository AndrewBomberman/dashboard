import mongoose from "mongoose";
import { Room } from "./Room.js";

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  description: {
    type: String,
    default: "",
  },
  phone: String,
  email: String,
  address: {
    address1: {
      type: String,
      default: "",
    },
    address2: {
      type: String,
      default: "",
    },
    city: {
      type: String,
      default: "London",
    },
    country: {
      type: String,
      default: "United Kingdom",
    },
  },
  rooms: [],
  thumbnail: {
    type: String,
    default: "http://localhost:8000/images/no-image.png",
  },
  gallery: {
    type: [String],
    default: [],
  },
  reviews: {
    type: [String],
    default: [],
  },
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
  created_at: {
    type: String,
    default: new Date(),
  },
})
  .pre("save", function (next) {
    if (!this.thumbnail) {
      this.thumbnail = process.env.NO_IMAGES_URL;
    }

    next();
  })

  .pre("remove" , function (next) {
    console.log(this._id);
    console.log("Deleted")
  });

export default new mongoose.model("Hotel", HotelSchema);
