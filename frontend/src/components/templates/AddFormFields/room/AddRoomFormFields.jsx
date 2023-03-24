import {
  Button,
  TextField,
  Stack,
  FormControl,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import CancelIcon from "@mui/icons-material/Cancel";
import SaveIcon from "@mui/icons-material/Save";
import WcIcon from "@mui/icons-material/Wc";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BedIcon from "@mui/icons-material/Bed";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import { useState } from "react";
import useAddRoomQuery from "../../../../api/internal/queries/room/useAddRoomQuery";

export default function AddRoomFormFields({ hotel }) {
  const { mutate } = useAddRoomQuery()
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0.0);
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [wifi, setWifi] = useState(false);
  const [breakfast, setBreakfast] = useState(false);
  const [ac, setAC] = useState(false);
  const [tv, setTV] = useState(false);
  const [roomService, setRoomService] = useState(false);

  const deleteImage = (image) => {
    setGalleryPreview([...galleryPreview.filter((img) => img !== image)]);
    URL.revokeObjectURL(image);
  };
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("beds", beds);
    formData.append("baths", baths);
    formData.append("wifi", wifi);
    formData.append("breakfast", breakfast);
    formData.append("ac", ac);
    formData.append("tv", tv);
    formData.append("room_service", roomService);
    formData.append("hotel_id", hotel._id);
    mutate(formData)
    setVisible(false);
  };

  return (
    <div className="RoomAddFormFields">
      <FormControl fullWidth sx={{ marginBottom: 1 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setVisible(true)}
        >
          Add Room
        </Button>
      </FormControl>

      {visible && (
        <Card>
          <CardHeader title={"Add Room"} />
          <CardContent>
            <Stack spacing={1}>
              <FormControl fullWidth>
                <TextField
                  inputMode="text"
                  name="name"
                  label="Name"
                  placeholder="Name"
                  onChange={(e) => setName(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <TitleIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  inputMode="text"
                  maxRows={3}
                  name="description"
                  label="Description"
                  placeholder="Description"
                  onChange={(e) => setDescription(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Price"
                  type="number"
                  inputMode="decimal"
                  id="filled-start-adornment"
                  placeholder="Price"
                  onChange={(e) => setPrice(e.target.value)}
                  InputProps={{
                    inputProps: {
                      min: 0,
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <AttachMoneyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Baths"
                  type="number"
                  inputMode="numeric"
                  id="filled-start-adornment"
                  placeholder="Baths"
                  onChange={(e) => setBaths(e.target.value)}
                  InputProps={{
                    inputProps: {
                      min: 1,
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <WcIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>
              <FormControl fullWidth>
                <TextField
                  label="Beds"
                  type="number"
                  inputMode="numeric"
                  id="filled-start-adornment"
                  placeholder="Beds"
                  onChange={(e) => setBeds(e.target.value)}
                  InputProps={{
                    inputProps: {
                      min: 1,
                    },
                    startAdornment: (
                      <InputAdornment position="start">
                        <BedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </FormControl>

              <Stack direction={"row"}>
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => {
                        console.log(e.target.checked);
                        setWifi(e.target.checked);
                      }}
                    />
                  }
                  label="Wifi"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => setBreakfast(e.target.checked)}
                    />
                  }
                  label="Breakfast"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={(e) => setAC(e.target.checked)} />
                  }
                  label="Air Conditioned"
                />
                <FormControlLabel
                  control={
                    <Checkbox onChange={(e) => setTV(e.target.checked)} />
                  }
                  label="TV"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      onChange={(e) => setRoomService(e.target.checked)}
                    />
                  }
                  label="Room Service"
                />
              </Stack>
            </Stack>
          </CardContent>
          <CardActions>
            <Stack direction={"row"} spacing={1}>
              <IconButton
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                <SaveIcon />
              </IconButton>
              <IconButton
                variant="contained"
                color="error"
                onClick={() => setVisible(false)}
              >
                <CancelIcon />
              </IconButton>
            </Stack>
          </CardActions>
        </Card>
      )}
    </div>
  );
}
