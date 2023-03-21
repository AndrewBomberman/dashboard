import { useEffect, useState } from "react"
import Thumbnail from "../../../templates/Thumbnail"
import { updateThumbnailService } from "../../../../api/services/generalServices";
export default function HotelEditThumbnailFormField({hotel}){

    return (
        <div className="HotelEditThumbnailFormField">
           <Thumbnail route={"hotels"} model={hotel} imageSender={updateThumbnailService}/>
        </div>
    )

}