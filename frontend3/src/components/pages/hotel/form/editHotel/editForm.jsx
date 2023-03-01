import { Form, useParams } from "react-router-dom";
import { useGetHotelsQuery } from "../../../../../api/internal/hotel/query/hotelQueries";
import CircularProgress from "@mui/material/CircularProgress";
import RefreshIcon from "@mui/icons-material/Refresh";

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  FormControl,
  Stack,
  TextField,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Button,
  Select,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CountryList from "../../../../lists/countryAndCityList";
import ImageGallery from "./ImageGallery";

export default function EditHotelForm() {
  const { id } = useParams();
  6;
  const { data, isLoading, isFetching } = useGetHotelsQuery();
  const [editMode, setEditMode] = useState(false);
  const [thumbnail, setThumbnail] = useState();
  const [gallery, setGallery] = useState();
  while (isLoading || isFetching) {
    return <CircularProgress />;
  }
  const hotel = data.find((hotel) => hotel._id === id);

  return (
    <div className="EditHotelForm">
      <Stack>
        <Stack direction={"row"} spacing={2}>
          <Card sx={{ width: "100%" }}>
            <CardHeader title="Edit Hotel" sx={{ textAlign: "center" }} />
            <Divider sx={{ marginLeft: 25, marginRight: 25 }} />
            <CardContent>
              <Form>
                <Stack spacing={2}>
                  <FormControl>
                    <TextField
                      type="text"
                      name="name"
                      value={hotel.name}
                      label="name"
                      placeholder="Name"
                      disabled={!editMode}
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      type="email"
                      name="email"
                      value={hotel.name}
                      label="E-Mail"
                      placeholder="E-Mail"
                      disabled={!editMode}
                    />
                    
                  </FormControl>
                  <FormControl>
                    <TextField
                      type="phone"
                      name="phone"
                      value={hotel.phone}
                      label="Phone"
                      placeholder="Phone"
                      disabled={!editMode}
                    />
                    
                  </FormControl>
                  <FormControl>
                    <TextField
                      type="text"
                      name="address1"
                      value={hotel.address.address1}
                      label="Address1"
                      placeholder="Address 1"
                      disabled={!editMode}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <TextField
                      type="text"
                      name="address2"
                      value={hotel.address.address2}
                      label="Address2"
                      placeholder="Address 2"
                      disabled={!editMode}
                      
                    />
                  </FormControl>

                  <FormControl>
                    <CountryList enabled={editMode} />
                  </FormControl>
                </Stack>
              </Form>
              <IconButton
                color="success"
                onClick={() => setEditMode(!editMode)}
              >
                <EditIcon />
              </IconButton>
            </CardContent>
          </Card>
          <Card sx={{ width: "100%", height: "100%", marginTop: 5 }}>
            <CardHeader title="Thumbnail" sx={{ textAlign: "center" }} />
            <Divider sx={{ marginLeft: 25, marginRight: 25 }} />
            <CardMedia
              component={"img"}
              image={thumbnail ?? hotel.thumbnail}
              width={"500"}
              height={"500"}
            />
            <CardContent>
              <Stack direction={"row"} spacing={2}>
                <IconButton
                  color="error"
                  onClick={() =>
                    setThumbnail("http://localhost:8000/images/no-image.png")
                  }
                >
                  <DeleteIcon />
                </IconButton>
                <TextField
                  type="file"
                  onChange={(e) => {
                    console.log(e.target.files[0]);
                    setThumbnail(URL.createObjectURL(e.target.files[0]));
                  }}
                />
                <IconButton
                  color="success"
                  onClick={() => setThumbnail(hotel.thumbnail)}
                >
                  <RefreshIcon />
                </IconButton>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
        <ImageGallery
          gallery={gallery ?? hotel.gallery}
          selector={setGallery}
        />
      </Stack>
    </div>
  );
}
