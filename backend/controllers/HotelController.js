import { generateImageData } from "../config/image_uploader.js";
import Hotel from "../models/Hotel.js";

const HotelController = {
  get: async (req, res) => {
    console.log(req.query);
    if (req.query._id) {
      res.status(200).json(await Hotel.findById(req.query));
    } else {
      res.status(200).json(await Hotel.find(req.query).limit(10).skip(0));
    }
  },
  add: async (req, res) => {
    const hotel = new Hotel(req.body);
    hotel.thumbnail = await generateImageData(
      req.files.thumbnail ?? null,
      "thumbnail",
      hotel,
      req.route.path
    )

    const gallery = [req.files.gallery];
    gallery.forEach(async (image) => {
      hotel.gallery.push(
        await generateImageData(image, "gallery", hotel, req.route.path)
      );
    });
    console.log(hotel)
    await hotel.save();
    

    res.status(200).json("Hotel Added");
  },
  edit: async (req, res) => {
    res.status(200).json(await Hotel.findOneAndUpdate(req.query, req.body));
  },
  delete: async (req, res) => {
    delete_images(req.query._id);
    res.status(200).json(await Hotel.findByIdAndDelete(req.query._id));
  },
};
export default HotelController;
