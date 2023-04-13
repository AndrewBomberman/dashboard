import mongoose from "mongoose";
export default new mongoose.model("Booking",{
    arrival_year:{
        type: String,
    },
    no_of_adults:String,
    no_of_children:String,
    type_of_meal_plan:String
},"bookings")