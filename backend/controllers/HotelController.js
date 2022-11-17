import Hotel from "../models/Hotel.js";

const HotelController = {
  
  get: async (req, res) => {
    
    res.status(200).json(await Hotel.find().limit(10).skip(0));
  },
  add: async (req, res) => {
    res.status(200).json(await Hotel.create(req.body));
  },
  edit: async (req, res) => {
    res.status(200).json(await Hotel.findOneAndUpdate(req.query, req.body));
  
  },
  delete: async (req, res) => {
    res.status(200).json(await Hotel.findByIdAndDelete(req.query._id));

  },
};
export default HotelController;
