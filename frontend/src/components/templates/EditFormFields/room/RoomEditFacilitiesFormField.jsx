import { IconButton, Stack } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';


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
              defaultChecked={wifi}
              onChange={async (e) => {
                const formData = new FormData()
                formData.append("wifi",e.target.checked)
                const { updateRoomWifiService } = await import ("../../../../api/services/roomServices")
                updateRoomWifiService(model._id,formData)
                console.log(e.target.checked)
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
              defaultChecked={breakfast}
              onChange={async (e) => {
                const formData = new FormData()
                formData.append("breakfast",e.target.checked)
                const { updateRoomBreakfastService } = await import ("../../../../api/services/roomServices")
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
              defaultChecked={ac}
              onChange={async (e) => {
                const formData = new FormData()
                formData.append("ac",e.target.checked)
                const { updateRoomAcService } = await import ("../../../../api/services/roomServices")
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
              defaultChecked={tv}
              onChange={async (e) => {
                const formData = new FormData()
                formData.append("tv",e.target.checked)
                const { updateRoomTvService } = await import ("../../../../api/services/roomServices")
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
              defaultChecked={roomService}
              onChange={async (e) => {
                const formData = new FormData()
                formData.append("room_service",e.target.checked)
                const { updateRoomServiceService } = await import ("../../../../api/services/roomServices")
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
