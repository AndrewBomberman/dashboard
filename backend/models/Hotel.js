import mongoose from "mongoose";

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name"],
  },
  description:{
    type: String,
    default:""
  },
  phone:String,
  email:String,
  address: {
    address1:{
      type: String,
      default:""
    },
    address2:{
      type: String,
      default:""
    },
    city: {
      type: String,
      default:""
    },
    country: {
      type: String,
      default:""
    },
  },
  rooms: [],
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
  created_at:{
    type:String,
    default: new Date(),
  }
  
})
.pre("save", function(next){
  console.log(this)
  next()
})

.pre("remove", { query: false, document: true }, async function (next) {
    await Room.deleteMany({ hotel_id: this._id });
    next();
});


export default new mongoose.model("Hotel", HotelSchema);
