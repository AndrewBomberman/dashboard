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
import {
  addImagesToGallery,
  deleteImageFromGallery,
} from "./ImageGalleryFunctions";
import { useState } from "react";
export default function ImageGallery({ gallery }) {
  const [selectedImages, setSelectedImages] = useState([...gallery]);

  return (
    <Card sx={{ marginTop: 3 }}>
      <CardHeader title="Gallery" sx={{ textAlign: "center" }} />
      <Divider sx={{ marginRight: 50, marginLeft: 50 }} />
      <CardContent>
        {selectedImages && (
          <ImageList cols={5}>
            {selectedImages.map((image) => {
              return (
                <ImageListItem key={image}>
                  <img src={image} width={"100%"} height={"100%"} />
                  <ImageListItemBar
                    actionIcon={
                      <IconButton
                        color="error"
                        onClick={() => {
                          deleteImageFromGallery(
                            image,
                            selectedImages,
                            setSelectedImages
                          );
                        }}
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
            onChange={(e) => {
              addImagesToGallery(
                e.target.files,
                selectedImages,
                setSelectedImages
              );
            }}
          />
          <IconButton onClick={() => setSelectedImages([...gallery])} color="success">
            <RefreshIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
