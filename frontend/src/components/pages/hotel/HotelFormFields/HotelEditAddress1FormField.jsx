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
import updateHotelAddress1Service from "../../../../services/hotel/updateHotelAddress1Service";
export default function HotelEditAddress2FormField({ hotel }) {
  const [editable, setEditable] = useState(false);
  const [hotelAddress1, setHotelAddress1] = useState(
    hotel.address.address1 ?? ""
  );
  useEffect(() => {}, [hotelAddress1]);

  const updateHotelAddress1 = async () => {
    const formData = new FormData();
    formData.append("address1", hotelAddress1);
    setEditable(false);
    await updateHotelAddress1Service(hotel._id, formData);
  };
  return (
    <div className="HotelEditAddress1FormField">
      <Stack direction={"row"} spacing={1}>
        <FormControl fullWidth>
          <TextField
            type="text"
            name="address1"
            value={hotelAddress1}
            label="Address1"
            required
            disabled={!editable}
            onChange={(e) => {
              setHotelAddress1(e.target.value);
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
            onClick={updateHotelAddress1}
          >
            <SaveIcon />
          </IconButton>
        </FormControl>
        <FormControl>
          <IconButton
            color="success"
            disabled={!editable}
            onClick={() => {
              setHotelAddress1(hotel.address.address1 ?? "");
            }}
          >
            <RefreshIcon />
          </IconButton>
        </FormControl>
      </Stack>
    </div>
  );
}
