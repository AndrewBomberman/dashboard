import { IconButton, Stack } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import SaveIcon from "@mui/icons-material/Save";
import EditIcon from '@mui/icons-material/Edit';
import {
  updateRoomAcService,
  updateRoomTvService,
  updateRoomWifiService,
  updateRoomServiceService,
  updateRoomBreakfastService
} from "../../../../api/services/roomServices";

export default function RoomEditFacilitiesFormField({ model }) {
  const [wifi, setWifi] = useState(model.wifi);
  const [breakfast, setBreakfast] = useState(model.breakfast)
  const [ac, setAC] = useState(model.ac);
  const [tv, setTV] = useState(model.tv);
  const [roomService, setRoomService] = useState(model.roomService);
  const [disabled, setDisabled] = useState(true);

  return (
    <div className="RoomEditFacilities">
      <Stack direction={"row"} sx={{ marginLeft: 5 }}>
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabled}
              defaultChecked={model.wifi}
              onChange={async (e) => {
                const formData = new FormData()
                formData.append("breakfast",e.target.checked)
                await updateRoomWifiService(model._id,formData)
                setWifi(e.target.checked);
              }}
            />
          }
          label="Wifi"
        />
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabled}
              defaultChecked={model.breakfast}
              onChange={async (e) => {
                const formData = new FormData()
                formData.append("breakfast",e.target.checked)
                await updateRoomBreakfastService(model._id,formData)
                setBreakfast(e.target.checked);
              }}
            />
          }
          label="Breakfast"
        />
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabled}
              defaultChecked={model.ac}
              onChange={async (e) => {
                const formData = new FormData()
                formData.append("ac",e.target.checked)
                await updateRoomAcService(model._id,formData)
                setAC(e.target.checked);
              }}
            />
          }
          label="Air Conditioned"
        />
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabled}
              defaultChecked={model.tv}
              onChange={async (e) => {
                const formData = new FormData()
                formData.append("tv",e.target.checked)
                await updateRoomTvService(model._id,formData)
                setTV(e.target.checked);
              }}
            />
          }
          label="TV"
        />
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabled}
              defaultChecked={model.roomService}
              onChange={async (e) => {
                const formData = new FormData()
                formData.append("room_service",e.target.checked)
                await updateRoomServiceService(model._id,formData)
                setRoomService(e.target.checked);
              }}
            />
          }
          label="Room Service"
        />
        
        <IconButton
          color="success"
          sx={{ marginLeft: 50}}
          onClick={()=>setDisabled(!disabled)}
        >
          <EditIcon />
        </IconButton>
      </Stack>
    </div>
  );
}
