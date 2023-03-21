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
import { updateHotelEmailService } from "../../../../api/services/hotelServices";
export default function HotelEditEmailFormField({ hotel }) {
  const [editable, setEditable] = useState(false);
  const [hotelEmail, setHotelEmail] = useState(hotel.email ?? "");
  useEffect(() => {}, [hotelEmail]);

  const updateHotelEmail = async () => {
    const formData = new FormData();
    formData.append("email", hotelEmail);
    setEditable(false);
    await updateHotelEmailService(hotel._id, formData);
  };
  return (
    <div className="HotelEditEmailFormField">
      <Stack direction={"row"} spacing={1}>
        <FormControl fullWidth>
          <TextField
            type="email"
            name="email"
            value={hotelEmail}
            label="E-mail"
            placeholder="Email"
            required
            disabled={!editable}
            onChange={(e) => {
              setHotelEmail(e.target.value);
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
            onClick={updateHotelEmail}
          >
            <SaveIcon />
          </IconButton>
        </FormControl>
        <FormControl>
          <IconButton
            color="success"
            disabled={!editable}
            onClick={() => {
              setHotelEmail(hotel.email ?? "");
            }}
          >
            <RefreshIcon />
          </IconButton>
        </FormControl>
      </Stack>
    </div>
  );
}
