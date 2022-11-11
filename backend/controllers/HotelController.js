import Hotel from "../models/Hotel.js";

const HotelController = {
  get: async (req, res) => {
    res.status(200).json(await Hotel.find().limit(10).skip(0));
  },
  add: async (req, res) => {
    res.status(200).json(await Hotel.create({
      name:req.body.name,
      user_id: res.locals.user._id
    }));
  },
  edit: async (req, res) => {
    if(res.locals.user._id === req.query._id) {
      res.status(200).json(
        await Hotel.findOneAndUpdate(req.query, req.body)
      );
    }
    res.status(401).json("Not Authorized");
  },
  delete: async (req, res) => {
    if(res.locals.user._id === req.query._id){
      res.status(200).json(await Hotel.findByIdAndDelete(req.query._id));
    }
    res.status(401).json("Not Authorized");
  },
};
export default HotelController;
