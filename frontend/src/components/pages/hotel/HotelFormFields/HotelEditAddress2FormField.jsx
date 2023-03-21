import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useEffect, useState } from "react";
import updateHotelAddress2Service from "../../../../services/hotel/updateHotelAddress2Service";
export default function HotelEditAddress1FormField({ hotel }) {
  const [editable, setEditable] = useState(false);
  const [hotelAddress2, setHotelAddress2] = useState(
    hotel.address.address2 ?? ""
  );
  useEffect(() => {}, [hotelAddress2]);

  const updateHotelAddress2 = async () => {
    const formData = new FormData();
    formData.append("address2", hotelAddress2);
    setEditable(false);
    await updateHotelAddress2Service(hotel._id, formData);
  };
  return (
    <div className="HotelEditAddress2FormField">
      <Stack direction={"row"} spacing={1}>
        <FormControl fullWidth>
          <TextField
            type="text"
            name="address2"
            value={hotelAddress2}
            label="Address2"
            required
            disabled={!editable}
            onChange={(e) => {
              setHotelAddress2(e.target.value);
            }}
          />
        </FormControl>
        <FormControl>
          <IconButton color="success" onClick={() => setEditable(!editable)}>
            <EditIcon />
          </IconButton>
        </FormControl>
        <FormControl>
          <IconButton
            color="primary"
            disabled={!editable}
            onClick={updateHotelAddress2}
          >
            <SaveIcon />
          </IconButton>
        </FormControl>
        <FormControl>
          <IconButton
            color="success"
            disabled={!editable}
            onClick={() => {
              setHotelAddress2(hotel.address.address2 ?? "");
            }}
          >
            <RefreshIcon />
          </IconButton>
        </FormControl>
      </Stack>
    </div>
  );
}
