import { updateGalleryService } from "../../../../api/services/generalServices";
import Gallery from "../../Gallery";
export default function EditGalleryFormField({ model, route}) {
  return (
    <div className="HotelEditGalleryFormField">
      <Gallery
        route={route}
        model={model}
        imageSender={updateGalleryService}
      />
    </div>
  );
}
