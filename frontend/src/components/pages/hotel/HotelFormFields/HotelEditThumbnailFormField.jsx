import { useEffect, useState } from "react"
import Thumbnail from "../../../templates/Thumbnail"
import updateHotelThumbnailService from "../../../../services/hotel/updateHotelThumbnailService"
export default function HotelEditThumbnailFormField({hotel}){

    return (
        <div className="HotelEditThumbnailFormField">
           <Thumbnail model={hotel} imageSender={updateHotelThumbnailService}/>
        </div>
    )

}