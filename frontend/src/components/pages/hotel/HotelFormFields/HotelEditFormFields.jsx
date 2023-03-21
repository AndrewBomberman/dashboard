import { Card, CardContent, CardHeader, Divider, Stack } from "@mui/material";
import HotelEditNameFormField from "./HotelEditNameFormField";
import HotelEditDescriptionFormField from "./HotelEditDescriptionFormField";
import HotelEditEmailFormField from "./HotelEditEmailFormField";
import HotelEditPhoneFormField from "./HotelEditPhoneformField";
import HotelEditAddress1FormField from "./HotelEditAddress1FormField";
import HotelEditAddress2FormField from "./HotelEditAddress2FormField";
import HotelEditThumbnailFormField from "./HotelEditThumbnailFormField";
import HotelEditGalleryFormField from "./HotelEditGalleryFormField";
import HotelEditCountryAndCity from "./HotelEditCountryAndCity";

export default function HotelEditFormFields({ hotel }) {
  return (
    <Card>
      <CardHeader title={"Edit Hotel"} sx={{ width: "100%" }} />
      <Divider sx={{ marginLeft: "10%", marginRight: "10%" }} />
      <CardContent>
        <Stack spacing={2} sx={{ width: "100%" }}>
          <HotelEditThumbnailFormField hotel={hotel} />
          <HotelEditNameFormField hotel={hotel} />
          <HotelEditDescriptionFormField hotel={hotel} />
          <HotelEditEmailFormField hotel={hotel} />
          <HotelEditPhoneFormField hotel={hotel} />
          <HotelEditAddress1FormField hotel={hotel} />
          <HotelEditAddress2FormField hotel={hotel} />
          <HotelEditCountryAndCity hotel={hotel} />
          <HotelEditGalleryFormField hotel={hotel} />
        </Stack>
      </CardContent>
    </Card>
  );
}
