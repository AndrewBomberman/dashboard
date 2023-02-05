import fs from "fs"
export const upload_thumbnail = async (hotel, thumbnail)=>{
    hotel.thumbnail = process.env.IMAGES_URL + "hotel/"+hotel._id+"/thumbnail/"+thumbnail.name
    await thumbnail.mv("./images/hotel/"+hotel._id+"/thumbnail/"+thumbnail.name)
}
export const upload_gallery = async (hotel, gallery)=>{
    if(gallery.length){
        gallery.forEach(async image => {
            hotel.gallery.push(process.env.IMAGES_URL + "hotel/"+hotel._id+"/gallery/"+image.name)
            await image.mv("./images/hotel/"+hotel._id+"/gallery/"+image.name)
        });
    }else {
        hotel.gallery.push(process.env.IMAGES_URL + "hotel/"+hotel._id+"/gallery/"+gallery.name)
        await gallery.mv("./images/hotel/"+hotel._id+"/gallery/"+gallery.name)
    }
    
}
export const delete_images = (id)=>{
    fs.rmSync("./images/hotel/"+id+"/thumbnail", { recursive: true, force: true });
    fs.rmSync("./images/hotel/"+id+"/gallery", { recursive: true, force: true });
    fs.rmSync("./images/hotel/"+id, { recursive: true, force: true }); 
}
