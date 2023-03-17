import { generateImageData, deleteImageData } from "../config/image_handler.js";
import Hotel from "../models/Hotel.js";
import { updateGallery, updateName } from "../config/model_updater.js";

const HotelController = {
  get: async (req, res) => {
    console.log("Request");
    const hotels = await Hotel.find(req.query);
    console.log(hotels);
    res.status(200).json(hotels);
  },
  add: async (req, res) => {
    const hotel = new Hotel({
      name: req.body.name,
      description: req.body.description,
      phone: req.body.phone,
      email: req.body.email,
      address: {
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        country: req.body.country,
      },
    });
    console.log(hotel);
    hotel.thumbnail = await generateImageData(
      req?.files?.thumbnail ?? null,
      "thumbnail",
      hotel._id,
      req.route.path
    );

    const gallery = req?.files?.gallery;
    if (gallery) {
      const updated_gallery = [];
      if (gallery?.length && gallery.length > 1) {
        for (let i = 0; i < gallery.length; i++) {
          updated_gallery.push(
            await generateImageData(
              gallery[i],
              "gallery",
              hotel._id,
              req.route.path
            )
          );
        }
      } else {
        updated_gallery.push(
          await generateImageData(gallery, "gallery", hotel._id, req.route.path)
        );
      }
      hotel.gallery = updated_gallery;
    }

    await hotel.save();

    res.status(200).json("Hotel Added");
  },
  edit: async (req, res) => {
    await updateName(req,Hotel)
    await updateGallery(req,Hotel)
    res.status(200).json("Edited");
  },
  delete: async (req, res) => {
    await Hotel.findByIdAndDelete(req.query._id);
    res.status(200).json("Hotel Deleted");
  },
};
export default HotelController;
