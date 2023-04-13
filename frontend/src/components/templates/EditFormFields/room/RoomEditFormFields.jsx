import EditNameFormField from "../general/EditNameFormField";
import EditDescriptionFormField from "../general/EditDescriptionFormField";
import EditThumbnailFormField from "../general/EditThumbnailFormField";
import EditGalleryFormField from "../general/EditGalleryFormField";
import RoomEditFacilitiesFormField from "./RoomEditFacilitiesFormField";
import { deleteService } from "../../../../api/services/generalServices";
import { Stack, Card, CardContent, CardHeader, Divider, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function RoomEditFormFields({ room }) {
  const navigate = useNavigate()
  return (
    <div className="RoomEditFormFields">
      <Card>
        <CardHeader title={"Edit Room"} sx={{ width: "100%" }} />
        <Divider sx={{ marginLeft: "10%", marginRight: "10%" }} />
        <CardContent>
          <Stack spacing={2} sx={{ width: "100%" }}>
            <EditNameFormField model={room} route={"rooms"} />
            <EditDescriptionFormField model={room} route={"rooms"} />
            <EditThumbnailFormField model={room} route={"rooms"} />
            <EditGalleryFormField model={room} route={"rooms"} />
            <RoomEditFacilitiesFormField model={room} route={"rooms"} />
            <Button variant="contained" color="error" onClick={async()=> {
            await deleteService(room._id, "rooms");
            navigate("/hotels/" + room.hotel_id)
            }}>Delete Room</Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
