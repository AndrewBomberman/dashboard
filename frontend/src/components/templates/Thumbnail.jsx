import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  TextField,
  IconButton,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteIcon from "@mui/icons-material/Delete";

import { useState, useContext, useEffect } from "react";
import { FormContext } from "./FormTemplate";

export default function Thumbnail({ image }) {
  const context = useContext(FormContext);
  const [thumbnail, setThumbnail] = useState(image);
  const [selectedThumbnail, setSelectedThumbnail] = useState();
  useEffect(() => {
    context.setFormFields("thumbnail", thumbnail ?? image);
  }, [thumbnail]);

  const replaceThumbnail = (e) => {
    setThumbnail(e.target.files[0]);
    setSelectedThumbnail(URL.createObjectURL(e.target.files[0]));
  };
  const deleteThumbnail = () => {
    setThumbnail();
    selectedThumbnail ?? URL.revokeObjectURL(selectedThumbnail);
  };
  const resetThumbnail = () => {
    setSelectedThumbnail(image);
  };

  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={"Thumbnail"} sx={{ textAlign: "center" }} />
      <CardMedia
        component={"img"}
        image={selectedThumbnail ?? image}
        alt="No Thumbnail"
        width={400}
        height={400}
      />

      <CardContent>
        <TextField
          type="file"
          name="thumbnail"
          inputProps={{ multiple: false }}
          onChange={replaceThumbnail}
        />
        <IconButton color="success" onClick={resetThumbnail}>
          <RefreshIcon />
        </IconButton>
        <IconButton color="error" onClick={deleteThumbnail}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}
