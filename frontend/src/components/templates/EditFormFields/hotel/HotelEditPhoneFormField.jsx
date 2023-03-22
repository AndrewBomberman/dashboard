import { FormControl, IconButton, Stack, TextField } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import RefreshIcon from "@mui/icons-material/Refresh";
import { useEffect, useState } from "react";
import { updateHotelPhoneService } from "../../../../api/services/hotelServices";
export default function HotelEditPhoneFormField({ hotel }) {
  const [editable, setEditable] = useState(false);
  const [hotelPhone, setHotelPhone] = useState(hotel.phone ?? "");
  useEffect(() => {}, [hotelPhone]);

  const updateHotelPhone = async () => {
    const formData = new FormData();
    formData.append("phone", hotelPhone);
    setEditable(false);
    await updateHotelPhoneService(hotel._id, formData);
  };
  return (
    <div className="HotelEditPhoneFormField">
      <Stack direction={"row"} spacing={1}>
        <FormControl fullWidth>
          <TextField
            type="text"
            name="phone"
            value={hotelPhone}
            label="Phone"
            placeholder="Phone"
            required
            disabled={!editable}
            onChange={(e) => {
              setHotelPhone(e.target.value);
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
            onClick={updateHotelPhone}
          >
            <SaveIcon />
          </IconButton>
        </FormControl>
        <FormControl>
          <IconButton
            color="success"
            disabled={!editable}
            onClick={() => {
              setHotelPhone(hotel.phone ?? "");
            }}
          >
            <RefreshIcon />
          </IconButton>
        </FormControl>
      </Stack>
    </div>
  );
}
