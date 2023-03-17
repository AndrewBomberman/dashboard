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
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { FormContext } from "./FormTemplate";

export default function Gallery({ images }) {
  const context = useContext(FormContext)
  const [gallery, setGallery] = useState(images ?? []);
  const [selectedGallery, setSelectedGallery] = useState(images ?? []);
  useEffect(()=>{context.setFormFields("gallery",gallery ?? images)},[gallery])


  const addImages = (e) => {
    setGallery([...gallery,...e.target.files])
    for(let i = 0; i < e.target.files.length; i++){
        selectedGallery.push(URL.createObjectURL(e.target.files[i]))
    }
    setSelectedGallery([...selectedGallery])
  };
  const deleteImage = (image) =>{
   console.log(image)
    setSelectedGallery([...selectedGallery.filter(img=>img!==image)])
    URL.revokeObjectURL(image)
  }
  return (
    <Card sx={{ marginTop: 3 }}>
      <CardHeader title="Gallery" sx={{ textAlign: "center" }} />
      <Divider sx={{ marginRight: 50, marginLeft: 50 }} />
      <CardContent>
        {selectedGallery && (
          <ImageList cols={5}>
            {selectedGallery.map((image) => {
                console.log(image)
              return (
                <ImageListItem key={image}>
                  <img src={image} width={"100%"} height={"100%"} />
                  <ImageListItemBar
                    actionIcon={
                      <IconButton
                        color="error"
                       onClick={()=>deleteImage(image)}
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
        </Stack>
      </CardContent>
    </Card>
  );
}
