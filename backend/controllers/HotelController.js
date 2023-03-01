import { generateImageData, deleteImageData } from "../config/image_handler.js";
import Hotel from "../models/Hotel.js";


const HotelController = {
  get: async (req, res) => {
    console.log(res.locals)
    if (req.query._id) {
      res.status(200).json(await Hotel.findById(req.query));
    } else {
      res.status(200).json(await Hotel.find(req.query).limit(10).skip(0));
    }
  },
  add: async (req, res) => {
    const hotel = new Hotel({
      name: req.body.name,
      description: req.body.description,
      phone:req.body.phone,
      email: req.body.email,
      address:{
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        country: req.body.country
      }
    });
    console.log(hotel)
    hotel.thumbnail = await generateImageData(
      req?.files?.thumbnail ?? null,
      "thumbnail",
      hotel,
      req.route.path
    );

    const gallery = req?.files?.gallery;
    if (gallery) {
      if (gallery?.length && gallery.length > 1) {
        for (let i = 0; i < gallery.length; i++) {
          hotel.gallery.push(
            await generateImageData(
              gallery[i],
              "gallery",
              hotel,
              req.route.path
            )
          );
        }
      } else {
        hotel.gallery.push(
          await generateImageData(gallery, "gallery", hotel, req.route.path)
        );
      }
    }
    console.log(hotel)

    await hotel.save();

    res.status(200).json("Hotel Added");
  },
  edit: async (req, res) => {
    res.status(200).json(await Hotel.findOneAndUpdate(req.query, req.body));
  },
  delete: async (req, res) => {
    deleteImageData(req.query._id);
    res.status(200).json(await Hotel.findByIdAndDelete(req.query._id));
  },
};
export default HotelController;
