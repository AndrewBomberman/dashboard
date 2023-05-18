import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  TextField,
  IconButton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState } from "react";

export default function Thumbnail({ model, imageSender, route }) {
  const [thumbnailFile, setThumbnailFile] = useState();
  const [thumbnailPreview, setThumbnailPreview] = useState(model.thumbnail);

  const resetThumbnail = async () => {
    setThumbnailFile();
    setThumbnailPreview(model.thumbnail);
    const respose = await fetch(model.thumbnail);
    const blob = await respose.blob();
    const file = new File([blob], "thumbnail", { type: blob.type });
    setThumbnailFile(file);
    document.getElementById("thumbnail").value = ""
  };
  const setThumbnail = (e) => {
    console.log(e.target.files[0]);
    setThumbnailFile(e.target.files[0]);
    thumbnailPreview ?? URL.revokeObjectURL(thumbnailPreview);
    setThumbnailPreview(URL.createObjectURL(e.target.files[0]));
  };
  const updateThumbnail = async () => {
    const formData = new FormData();
    formData.append("thumbnail", thumbnailFile);
    await imageSender(model._id, formData, route);
  };
  const deleteThumbnail = async () => {
    const formData = new FormData();
    const response = await fetch("http://localhost:8000/images/no-image.png");
    const blob = await response.blob();
    console.log(blob)
    const newThumbnail = new File([blob], "thumbnail.jpg",  { type: blob.type });
    formData.append("thumbnail",newThumbnail)
    console.log(newThumbnail)
    setThumbnailFile(newThumbnail);
    setThumbnailPreview(URL.createObjectURL(newThumbnail))
   
    await imageSender(model._id, formData, route)
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={"Thumbnail"} sx={{ textAlign: "center" }} />
      <CardMedia
        component={"img"}
        image={thumbnailPreview}
        alt="No Thumbnail"
        width={400}
        height={400}
      />

      <CardContent>
        <TextField
          type="file"
          name="thumbnail"
          id="thumbnail"
          inputProps={{ multiple: false }}
          onChange={setThumbnail}
        />
        <IconButton color="success" onClick={resetThumbnail}>
          <RefreshIcon />
        </IconButton>
        <IconButton color="error" onClick={deleteThumbnail}>
          <DeleteIcon />
        </IconButton>
        <IconButton color="primary" onClick={updateThumbnail}>
          <SaveIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
