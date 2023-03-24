import {
  updateDescription,
  updateEmail,
  updateName,
  updatePhone,
  updateAddress1,
  updateAddress2,
  updateThumbnail,
  updateGallery,
  updateCity,
  updateCountry,
  getModels,
  updateDisplay,
  deleteModel,
} from "../config/services/model_handler.js";
import Hotel from "../models/Hotel.js";
import { Room } from "../models/Room.js";
const HotelController = {
  getHotels: async (req, res) => {
    const hotels = await getModels(req, Hotel)
    res.status(200).json(hotels);
  },
  addHotel: async (req, res) => {
    console.log(req.body)
    await Hotel.create(req.body)
    res.status(200).json("Hotel Added");
  },
  deleteHotel: async (req, res) => {
    await deleteModel(req,Hotel)
    await Room.deleteMany({hotel_id:req.query._id})
    res.status(200).json("Hotel Deleted");
  },

  updateHotelName: async (req, res) => {
    await updateName(req, Hotel);
    res.status(200).json("update");
  },

  updateHotelDescription: async (req, res) => {
    await updateDescription(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelEmail: async (req, res) => {
    await updateEmail(req, Hotel);
    res.status(200).json("update");
  },
  updatePhone: async (req, res) => {
    await updatePhone(req, Hotel);
    res.status(200).json("update");
  },
  updateAddress1: async (req, res) => {
    await updateAddress1(req, Hotel);
    res.status(200).json("update");
  },
  updateAddress2: async (req, res) => {
    await updateAddress2(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelCountry: async (req, res) => {
    await updateCountry(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelCity: async (req, res) => {
    await updateCity(req, Hotel);
    res.status(200).json("update");
  },

  updateHotelThumbnail: async (req, res) => {
    await updateThumbnail(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelGallery: async (req, res) => {
    await updateGallery(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelDisplay: async (req, res) => {
    await updateDisplay(req, Hotel);
    res.status(200).json("update");
  },
};

export default HotelController;
