import { Room } from "../models/Room.js";

const RoomController = {
  get: async (req, res) => {
    res.status(200).json(
      await Room.find(await req.query)
    );
  },
  add: async (req, res) => {
    const room = new Room(req.body);
    room.thumbnail = await generateImageData(
      req?.files?.thumbnail ?? null,
      "thumbnail",
      room,
      req.route.path
    );
    room.hotel_id = req.query.hotel_id;

    const gallery = req?.files?.gallery;
    if (gallery) {
      if (gallery?.length && gallery.length > 1) {
        for (let i = 0; i < gallery.length; i++) {
          room.gallery.push(
            await generateImageData(
              gallery[i],
              "gallery",
              hotel,
              req.route.path
            )
          );
        }
      } else {
        room.gallery.push(
          await generateImageData(gallery, "gallery", hotel, req.route.path)
        );
      }
    }

    await room.save();

    res.status(200).json("Hotel Added");
  },
  edit: async (req, res) => {
    const { _id, name, description } = req.body;
    res.status(200).json(
      await Room.findByIdAndUpdate(req.query._id, req.body)
    );
  },
  delete: async (req, res) => {
    res.status(200).json(await Romm.findByIdAndDelete(req.query._id));
  },
};
export default RoomController;
