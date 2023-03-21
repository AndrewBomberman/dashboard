import {
  Card,
  CardContent,
  CardHeader,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Divider,
  IconButton,
  TextField,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RefreshIcon from "@mui/icons-material/Refresh";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";

export default function Gallery({ model, imageSender }) {
  const [gallery, setGallery] = useState([]);
  const [selectedGallery, setSelectedGallery] = useState(model.gallery ?? []);

  const addImages = (e) => {
    setGallery([...gallery, ...e.target.files]);
    for (let i = 0; i < e.target.files.length; i++) {
      gallery.push(e.target.files[i]);
      selectedGallery.push(URL.createObjectURL(e.target.files[i]));
    }
    setSelectedGallery([...selectedGallery]);
    setGallery([...gallery]);
  };
  const deleteImage = (image) => {
    setSelectedGallery([...selectedGallery.filter((img) => img !== image)]);
    URL.revokeObjectURL(image);
  };
  const resetGallery = () => {
    const oldGallery = [];
    for (let i = 0; i < model.gallery.length; i++) {
      oldGallery.push(model.gallery[i]);
    }
    setSelectedGallery([...oldGallery]);
  };
  const updateGallery = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedGallery.length; i++) {
      const response = await fetch(selectedGallery[i]);
      const blob = await response.blob();
      const file = new File([blob], "gallery" + [i], {
        type: blob.type,
      });
      formData.append("gallery", file);
    }
    
    await imageSender(model._id, formData);
  };

  return (
    <div className="Gallery">
      <Card sx={{ marginTop: 3 }}>
        <CardHeader title="Gallery" sx={{ textAlign: "center" }} />
        <Divider sx={{ marginRight: 50, marginLeft: 50 }} />
        <CardContent>
          {selectedGallery && (
            <ImageList cols={5}>
              {selectedGallery.map((image) => {
                return (
                  <ImageListItem key={image}>
                    <img src={image} width={"100%"} height={"100%"} />
                    <ImageListItemBar
                      actionIcon={
                        <IconButton
                          color="error"
                          onClick={() => deleteImage(image)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          )}
          <Stack direction={"row"} spacing={3}>
            <TextField
              type="file"
              name="gallery"
              inputProps={{ multiple: true }}
              onChange={addImages}
            />
            <IconButton onClick={resetGallery}>
              <RefreshIcon />
            </IconButton>
            <IconButton color="primary" onClick={updateGallery}>
              <SaveIcon />
            </IconButton>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
}
