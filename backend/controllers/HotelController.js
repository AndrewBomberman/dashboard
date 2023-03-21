import { generateImageData, deleteImageData } from "../config/image_handler.js";
import Hotel from "../models/Hotel.js";
import { updateDescription, updateEmail, updateName, updatePhone, updateAddress1, updateAddress2, updateThumbnail, updateGallery, updateCountry, updateCity } from "../config/model_updater.js";

const HotelController = {
  get: async (req, res) => {
    const hotels = await Hotel.find(req.query);
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
  delete: async (req, res) => {
    await Hotel.findByIdAndDelete(req.query._id);
    res.status(200).json("Hotel Deleted");
  },

  updateName: async (req, res)=>{
    await updateName(req, Hotel)
    res.status(200).json("update")
  },

  updateDescription: async (req, res)=>{
    await updateDescription(req, Hotel)
    res.status(200).json("update")
  },
  updateEmail: async (req, res)=>{
    await updateEmail(req, Hotel)
    res.status(200).json("update")
  },
  updatePhone: async (req, res)=>{
    await updatePhone(req, Hotel)
    res.status(200).json("update")
  },
  updateAddress1: async (req, res)=>{
    await updateAddress1(req,Hotel)
    res.status(200).json("update")
  },
  updateAddress2: async (req, res)=>{
    await updateAddress2(req,Hotel)
    res.status(200).json("update")
  },
  updateHotelCountry: async (req, res)=>{
    await updateCountry(req, Hotel)
    res.status(200).json("update")
  },
  updateHotelCity: async (req, res)=>{
    await updateCity(req, Hotel)
    res.status(200).json("update")
  },

  updateHotelThumbnail: async (req, res)=>{
    await updateThumbnail(req, Hotel)
    res.status(200).json("update")
  },
  updateHotelGallery: async (req, res)=>{
    await updateGallery(req, Hotel)
    res.status(200).json("update")
  }
};
export default HotelController;
