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
import updateHotelDescriptionService from "../../../../services/hotel/updateHotelDescriptionService";
export default function HotelEditDescriptionFormField({ hotel }) {
  const [editable, setEditable] = useState(false);
  const [hotelDescription, setHotelDescription] = useState(
    hotel.description ?? ""
  );
  useEffect(() => {}, [hotelDescription]);

  const updateHotelDescription = async () => {
    const formData = new FormData();
    formData.append("description", hotelDescription);
    setEditable(false);
    await updateHotelDescriptionService(hotel._id, formData);
  };
  return (
    <div className="HotelDescriptionFormField">
      <Stack direction={"row"} spacing={1}>
        <FormControl fullWidth>
          <TextField
            type="text"
            name="description"
            value={hotelDescription}
            label="Description"
            required
            disabled={!editable}
            onChange={(e) => {
              setHotelDescription(e.target.value);
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
            onClick={updateHotelDescription}
          >
            <SaveIcon />
          </IconButton>
        </FormControl>
        <FormControl>
          <IconButton
            color="success"
            disabled={!editable}
            onClick={() => {
              setHotelDescription(hotel.description ?? "");
            }}
          >
            <RefreshIcon />
          </IconButton>
        </FormControl>
      </Stack>
    </div>
  );
}
