import { Room } from "../models/Room.js";
import { updateDescription, updateName, updateThumbnail, updateGallery } from "../config/services/model_handler.js"

const RoomController = {
  get: async (req, res) => {
    res.status(200).json(await Room.find(req.query));
  },
  add: async (req, res) => {
    const room = new Room(req.body)
    room.hotel_id = req.query.hotel_id
    await room.save()
    res.status(200).json("Room Added");
  },
  delete: async (req, res) => {
    console.log(req.query._id)
    console.log("Room Deleted")
    res.status(200).json(await Room.findByIdAndDelete(req.query._id));
  },
  updateRoomName: async (req, res)=>{
    await updateName (req, Room)
    res.status(200).json("updated")
  },
  updateRoomDescription: async (req, res)=>{
    await updateDescription (req, Room)
    res.status(200).json("updated")
  },
  updateRoomThumbnail: async (req, res)=>{
    await updateThumbnail (req, Room)
    res.status(200).json("updated")
  },
  updateRoomGallery: async (req, res)=>{
    await updateGallery (req, Room)
    res.status(200).json("updated")
  }
};
export default RoomController;
