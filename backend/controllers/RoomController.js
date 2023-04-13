import { Room } from "../models/Room.js";
import { updateDescription, updateName, updateThumbnail, updateGallery, getModels, updateBreakfast, updateWifi, updateAc, updateTv, createModel } from "../services/model_handler.js"


const RoomController = {
  get: async (req, res) => {
    res.status(200).json(await getModels(req, Room));
  },
  add: async (req, res) => {
    await createModel(req, Room)

    res.status(200).json("Room added")
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
  },
  updateRoomTv: async (req, res)=>{
    await updateTv (req, Room)
    res.status(200).json("updated")
  },
  updateRoomAc: async (req, res)=>{
    await updateAc (req, Room)
    res.status(200).json("updated")
  },
  updateRoomBreakfast: async (req, res)=>{
    await updateBreakfast (req, Room)
    res.status(200).json("updated")
  },
  updateRoomWifi: async (req, res)=>{
    await updateWifi (req, Room)
    res.status(200).json("updated")
  },
  updateRoomTv: async (req, res)=>{
    await updateTv (req, Room)
    res.status(200).json("updated")
  }
};
export default RoomController;
