import Booking from '../models/Booking.js'
export const getBookings = async (req, res) => {
    res.status(200).json(await Booking.find(req.query))
}
    