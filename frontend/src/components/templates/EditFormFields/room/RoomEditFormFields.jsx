import EditNameFormField from "../general/EditNameFormField";
import EditDescriptionFormField from "../general/EditDescriptionFormField";
import EditThumbnailFormField from "../general/EditThumbnailFormField";
import EditGalleryFormField from "../general/EditGalleryFormField";
import { Stack, Card, CardContent, CardHeader, Divider } from "@mui/material";
export default function RoomEditFormFields({ room }) {
  console.log(room);
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
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
