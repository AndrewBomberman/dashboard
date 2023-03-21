import { Room } from "../models/Room.js";
import { generateImageData, deleteImageData } from "../config/services/image_handler.js";

const RoomController = {
  get: async (req, res) => {
    console.log(req.query)
    res.status(200).json(await Room.find(req.query));
  },
  add: async (req, res) => {
    const room = new Room(req.body);
    room.hotel_id = req.query.hotel_id;
    room.thumbnail = await generateImageData(
      req?.files?.thumbnail ?? null,
      "thumbnail",
      room._id,
      req.route.path
    );
    

    const gallery = req?.files?.gallery;
    if (gallery) {
      if (gallery?.length && gallery.length > 1) {
        for (let i = 0; i < gallery.length; i++) {
          room.gallery.push(
            await generateImageData(
              gallery[i],
              "gallery",
              room._id,
              req.route.path
            )
          );
        }
      } else {
        room.gallery.push(
          await generateImageData(gallery, "gallery", room._id, req.route.path)
        );
      }
    }

    await room.save();

    res.status(200).json("Room Added");
  },
  edit: async (req, res) => {
    deleteImageData(req.route.path, req.query._id)

    const thumbnail = await generateImageData(
       req?.files?.thumbnail ?? null,
       "thumbnail",
       req.query._id,
       req.route.path
     );
 
     const gallery = req?.files?.gallery;
     const updated_gallery = []
     if (gallery) {
       if (gallery?.length && gallery.length > 1) {
         for (let i = 0; i < gallery.length; i++) {
           updated_gallery.push(
             await generateImageData(
               gallery[i],
               "gallery",
               req.query._id,
               req.route.path
             )
           );
         }
       } else {
         updated_gallery.push(
           await generateImageData(gallery, "gallery", req.query._id, req.route.path)
         );
       }
     }
     console.log(updated_gallery)
     const room = await Room.findOneAndUpdate(req.query_id, {
       name: req.body.name,
       description: req.body.description,
       nr_beds: req.body.nr_beds,
       nr_bathrooms: req.body.nr_bathrooms,
       thumbnail:thumbnail,
       gallery:updated_gallery
 
     })
     res.status(200).json("Edited");
  },
  delete: async (req, res) => {
    console.log(req.query._id)
    console.log("Room Deleted")
    res.status(200).json(await Room.findByIdAndDelete(req.query._id));
  },
};
export default RoomController;
