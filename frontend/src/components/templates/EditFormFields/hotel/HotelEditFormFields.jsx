import { Card, CardContent, CardHeader, Divider, Stack } from "@mui/material";
import EditNameFormField from "../general/EditNameFormField"
import EditDescriptionFormField from "../general/EditDescriptionFormField"
import HotelEditEmailFormField from "../hotel/HotelEditEmailFormField"
import HotelEditPhoneFormField from "../hotel/HotelEditPhoneFormField"
import HotelEditAddress1FormField from "../hotel/HotelEditAddress1FormField"
import HotelEditAddress2FormField from "../hotel/HotelEditAddress2FormField"
import EditThumbnailFormField from "../general/EditThumbnailFormField"
import EditGalleryFormField from "../general/EditGalleryFormField"
import HotelEditCountryAndCity from "../hotel/HotelEditCountryAndCity"
import HotelEditRooms from "../hotel/HotelEditRooms";

export default function HotelEditFormFields({ hotel, rooms }) {
  console.log(hotel)
  return (
    <Card>
      <CardHeader title={"Edit Hotel"} sx={{ width: "100%" }} />
      <Divider sx={{ marginLeft: "10%", marginRight: "10%" }} />
      <CardContent>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <EditThumbnailFormField model={hotel} route={"hotels"}/>
          <EditNameFormField model={hotel} route={"hotels"}/>
          <EditDescriptionFormField model={hotel} route={"hotels"}/>
          <HotelEditEmailFormField hotel={hotel} />
          <HotelEditPhoneFormField hotel={hotel} />
          <HotelEditAddress1FormField hotel={hotel} />
          <HotelEditAddress2FormField hotel={hotel} />
          <HotelEditCountryAndCity hotel={hotel} />
          <EditGalleryFormField model={hotel} route={"hotels"}/>
          <HotelEditRooms rooms={rooms} />
        </Stack>
      </CardContent>
    </Card>
  );
}
