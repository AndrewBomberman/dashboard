const { Room } = await import("../models/Room.js");

const RoomController = {
  get: async (req, res) => {
    const { getModels } = await import("../services/model_handler.js");
    res.status(200).json(await getModels(req, Room));
  },
  add: async (req, res) => {
    const { createModel } = await import("../services/model_handler.js");
    await createModel(req, Room)

    res.status(200).json("Room added")
  },
  delete: async (req, res) => {
    const { deleteModel } = await import("../services/model_handler.js");
    res.status(200).json(await deleteModel(req.query._id));
  },
  updateRoomName: async (req, res)=>{
    const { updateName } = await import("../services/model_handler.js");
    await updateName (req, Room)
    res.status(200).json("updated")
  },
  updateRoomDescription: async (req, res)=>{
    const { updateDescription } = await import("../services/model_handler.js");
    await updateDescription (req, Room)
    res.status(200).json("updated")
  },
  updateRoomThumbnail: async (req, res)=>{
    const { updateThumbnail } = await import("../services/model_handler.js");
    await updateThumbnail (req, Room)
    res.status(200).json("updated")
  },
  updateRoomGallery: async (req, res)=>{
    const { updateGallery } = await import("../services/model_handler.js");
    await updateGallery (req, Room)
    res.status(200).json("updated")
  },
  updateRoomTv: async (req, res)=>{
    const { updateTv } = await import("../services/model_handler.js");
    await updateTv (req, Room)
    res.status(200).json("updated")
  },
  updateRoomAc: async (req, res)=>{
    const { updateAc } = await import("../services/model_handler.js");
    await updateAc (req, Room)
    res.status(200).json("updated")
  },
  updateRoomBreakfast: async (req, res)=>{
    const { updateBreakfast } = await import("../services/model_handler.js");
    await updateBreakfast (req, Room)
    res.status(200).json("updated")
  },
  updateRoomWifi: async (req, res)=>{
    const { updateWifi } = await import("../services/model_handler.js");
    await updateWifi (req, Room)
    res.status(200).json("updated")
  },
  updateRoomTv: async (req, res)=>{
    const { updateTv } = await import("../services/model_handler.js");
    await updateTv (req, Room)
    res.status(200).json("updated")
  },
  updateRoomService: async (req, res)=>{
    const { updateRoomService } = await import("../services/model_handler.js");
    await updateRoomService (req, Room)
    res.status(200).json("updated")
  }
};
export default RoomController;
