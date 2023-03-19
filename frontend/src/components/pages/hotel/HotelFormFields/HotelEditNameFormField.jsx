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
import updateHotelNameService from "../../../../services/hotel/updateHotelNameService";
export default function HotelEditNameFormField({ hotel }) {
  const [editable, setEditable] = useState(false);
  const [hotelName, setHotelName] = useState(hotel.name ?? "");
  useEffect(() => {}, [hotelName]);

  const updateHotelName = async ()=>{
    const formData =new FormData();
    formData.append('name',hotelName);
    setEditable(false);
    await updateHotelNameService(hotel._id, formData);
  }
  return (
    <div className="HotelNameFormField">
      <FormControl>
        <TextField
          type="text"
          name="name"
          value={hotelName}
          label="Name"
          placeholder="Name"
          required
          disabled={!editable}
          onChange={(e) => {
            setHotelName(e.target.value);
            console.log(hotelName);
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
          onClick={updateHotelName}
        >
          <SaveIcon />
        </IconButton>
      </FormControl>
      <FormControl>
        <IconButton
          color="success"
          disabled={!editable}
          onClick={() => {
            setHotelName(hotel.name ?? "");
          }}
        >
          <RefreshIcon />
        </IconButton>
      </FormControl>
    </div>
  );
}
