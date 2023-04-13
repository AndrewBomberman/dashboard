import Booking from "../models/Booking.js"


export const getLast5YearsBookings = async (req, res) => {
  const bookings = []
  const crtYear = new Date().getFullYear()

  for(let i = 6; i > 0; i--) {
    bookings.push({
      year: crtYear - i,
      bookings:await Booking.countDocuments({arrival_year:crtYear - i})
    })
  }
  res.status(200).json(bookings)

}

export const getMealPlanStats = async (req, res) => {
  
  res.status(200).json([
    {
      type_of_meal_plan: "Meal Plan 1",
      total:await Booking.countDocuments({type_of_meal_plan:"Meal Plan 1"}),
      
    },
    {
      type_of_meal_plan: "Meal Plan 2",
      total:await Booking.countDocuments({type_of_meal_plan:"Meal Plan 2"}),
    }
  ])

}

export const getFamilyTypeStats = async (req, res) => {
  
  res.status(200).json([
    {
      type:"adults_with_children",
      total:await Booking.countDocuments({no_of_children:{$gt:"0"}, no_of_adults:{$gt:"0"}}),
    },
    {
      type:"adults_with_no_children",
      total:await Booking.countDocuments({no_of_children:"0"},{no_of_adults:{$gt:"0"}}),
    }
  ])

}