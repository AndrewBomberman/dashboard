import { updateGalleryService } from "../../../../api/services/generalServices";
import Gallery from "../../../templates/Gallery"
export default  function HotelEditGalleryFormField ({hotel}){

    return (
        <div className="HotelEditGalleryFormField">
            <Gallery route={"hotels"} model={hotel} imageSender={updateGalleryService}/>
        </div>
    )
}