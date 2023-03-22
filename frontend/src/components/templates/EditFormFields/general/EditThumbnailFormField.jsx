import { updateThumbnailService } from "../../../../api/services/generalServices"
import Thumbnail from "../../Thumbnail"
export default function EditThumbnailFormField ({model, route}){
    return (
        <div className="HotelEditThumbnailFormField">
           <Thumbnail route={route} model={model} imageSender={updateThumbnailService}/>
        </div>
    )
}