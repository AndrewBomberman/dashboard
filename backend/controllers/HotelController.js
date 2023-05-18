const  Hotel = await import ("../models/Hotel.js");
const { Room } = await import ("../models/Room.js");
const HotelController = {
  getHotels: async (req, res) => {
    const { getModels } = await import("../services/model_handler.js");
    const hotels = await getModels(req, Hotel);
    res.status(200).json(hotels);
  },
  addHotel: async (req, res) => {
    const { createModel } = await import("../services/model_handler.js");
    await createModel(req, Hotel)
    res.status(200).json("Hotel Added");
  },
  deleteHotel: async (req, res) => {
    const { deleteModel } = await import("../services/model_handler.js");
    await deleteModel(req, Hotel);
    await Room.deleteMany({ hotel_id: req.query._id });
    res.status(200).json("Hotel Deleted");
  },

  updateHotelName: async (req, res) => {
    const { updateName } = await import("../services/model_handler.js");
    await updateName(req, Hotel);
    res.status(200).json("update");
  },

  updateHotelDescription: async (req, res) => {
    const { updateDescription } = await import("../services/model_handler.js");
    await updateDescription(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelEmail: async (req, res) => {
    const { updateEmail } = await import("../services/model_handler.js");
    await updateEmail(req, Hotel);
    res.status(200).json("update");
  },
  updatePhone: async (req, res) => {
    const { updatePhone } = awaitimport("../services/model_handler.js");
    await updatePhone(req, Hotel);
    res.status(200).json("update");
  },
  updateAddress1: async (req, res) => {
    const { updateAddress1 } = await import("../services/model_handler.js");
    await updateAddress1(req, Hotel);
    res.status(200).json("update");
  },
  updateAddress2: async (req, res) => {
    const { updateAddress2 } = await import("../services/hotel_handler.js");
    await updateAddress2(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelCountry: async (req, res) => {
    const { updateCountry } = await import("../services/model_handler.js");
    await updateCountry(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelCity: async (req, res) => {
    const { updateCity } = await import("../services/model_handler.js");
    await updateCity(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelThumbnail: async (req, res) => {
    console.log(req.files)
    const { updateThumbnail } = await import("../services/model_handler.js");
    await updateThumbnail(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelGallery: async (req, res) => {
    const { updateGallery } = await import("../services/model_handler.js");
    await updateGallery(req, Hotel);
    res.status(200).json("update");
  },
  updateHotelDisplay: async (req, res) => {
    const { updateDisplay } = await import("../services/model_handler.js");
    await updateDisplay(req, Hotel);
    res.status(200).json("update");
  },
};
export default HotelController;
