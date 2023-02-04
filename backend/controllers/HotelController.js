import Hotel from "../models/Hotel.js";

const HotelController = {
  
  get: async (req, res) => {
    console.log(req.query)
    if(req.query._id){
      res.status(200).json(await Hotel.findById(req.query));
    }
    else{
      res.status(200).json(await Hotel.find(req.query).limit(10).skip(0));
    }
    
  },
  add: async (req, res) => {
   
    console.log(req.files)
   
    const hotel = await Hotel.create({name:req.body.name});
    
    const thumbnail = req.files.thumbnail
    const gallery = req.files.gallery
    console.log(req.files)
   
    if(thumbnail){
      hotel.thumbnail = process.env.IMAGES_URL + "hotel/"+hotel._id+"/thumbnail/"+thumbnail.name
      await thumbnail.mv("./images/hotel/"+hotel._id+"/thumbnail/"+thumbnail.name)
      
      
    }
   
    if(gallery){
      gallery.forEach(async image => {
        hotel.gallery.push(process.env.IMAGES_URL + "hotel/"+hotel._id+"/gallery/"+image.name)
        await image.mv("./images/hotel/"+hotel._id+"/gallery/"+image.name)
        
        
      });
      await hotel.save()
    }
    
    
    
    res.status(200).json({hotel: "Abc"})
  },
  edit: async (req, res) => {
    if(req.files.thumbnail){
      console.log(req.files.thumbnail)
      const hotel = await hotel.findById(req.query._id)
      hotel.thumbnail = req.files.thumbnail
      
    }
    if(req.files.gallery){
      const hotel = await hotel.findById(req.query._id)
      hotel.gallery = req.files.gallery
      await hotel.save()
    }
    res.status(200).json(await Hotel.findOneAndUpdate(req.query, req.body));
  
  },
  delete: async (req, res) => {
    res.status(200).json(await Hotel.findByIdAndDelete(req.query._id));

  },
};
export default HotelController;
