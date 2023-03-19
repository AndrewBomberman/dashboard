import updateHotelGalleryService from "../../../../services/hotel/updateHotelGalleryService"
import Gallery from "../../../templates/Gallery"
export default  function HotelEditGalleryFormField ({hotel}){

    return (
        <div className="HotelEditGalleryFormField">
            <Gallery model={hotel} imageSender={updateHotelGalleryService}/>
        </div>
    )
}