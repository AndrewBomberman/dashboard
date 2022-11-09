import Hotel from "../models/Hotel.js";

const HotelController = {
  get: async (req, res) => {
    res.status(200).json(await Hotel.find(req.query).limit(10).skip(0));
  },
  add: async (req, res) => {
    res.status(200).json(await Hotel.create(req.body));
  },
  edit: async (req, res) => {
    const { _id, name, description } = req.body;
    res.status(200).json(
      await Hotel.findByIdAndUpdate(_id, {
        name: name,
        description: description,
      })
    );
  },
  delete: async (req, res) => {
    console.log(req.query);
    res.status(200).json(await Hotel.findByIdAndDelete(req.query._id));
  },
};
export default HotelController;
