import express from "express";

import { getLast5YearsBookings, getMealPlanStats, getFamilyTypeStats } from "../../controllers/StatisticsController.js";
import { getBookings } from "../../controllers/BookingController.js";

const bookingRoutes = express.Router();


bookingRoutes.get("/", getLast5YearsBookings)
bookingRoutes.get("/meal", getMealPlanStats)
bookingRoutes.get("/familly", getFamilyTypeStats)
bookingRoutes.get("/search", getBookings)

export default bookingRoutes;