import express from "express";
import HotelController from "../../controllers/HotelController.js";

const hotelRoutes = express.Router();
//Hotel Routes

hotelRoutes.get("/", HotelController.getHotels);
hotelRoutes.post("/", HotelController.addHotel);
hotelRoutes.delete("/", HotelController.deleteHotel);
hotelRoutes.put("/name", HotelController.updateHotelName);
hotelRoutes.put("/description", HotelController.updateHotelDescription);
hotelRoutes.put("/email", HotelController.updateHotelEmail);
hotelRoutes.put("/phone", HotelController.updatePhone);
hotelRoutes.put("/address1", HotelController.updateAddress1);
hotelRoutes.put("/address2", HotelController.updateAddress2);
hotelRoutes.put("/city", HotelController.updateHotelCity);
hotelRoutes.put("/country", HotelController.updateHotelCountry);
hotelRoutes.put("/thumbnail", HotelController.updateHotelThumbnail);
hotelRoutes.put("/gallery", HotelController.updateHotelGallery);
hotelRoutes.put("/display", HotelController.updateHotelDisplay);
export default hotelRoutes;
