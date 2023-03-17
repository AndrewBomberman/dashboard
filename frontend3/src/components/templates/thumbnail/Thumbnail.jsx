import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Stack,
  TextField,
} from "@mui/material";
import {
  DeleteThumbnailButton,
  ResetThumbnailButton,
} from "./ThumbnailButtons";
import { useState } from "react";
import { replaceThumbnail, deleteThumbnail, resetThumbnail } from "./ThumbnailFunctions";

export default function Thumbnail({ image }) {
  const [thumbnail, setThumbnail] = useState();
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title={"Thumbnail"} sx={{ textAlign: "center" }} />
      <CardMedia component={"img"} image={thumbnail ?? image ?? "http://localhost:8000/images/no-image.png"} alt="No Thumbnail"  width={400} height={400}/>

      <CardContent>
        <Stack direction={"row"} spacing={2}>
          <DeleteThumbnailButton setter={()=>deleteThumbnail(thumbnail,setThumbnail)}/>
         
          <TextField type="file" name="thumbnail" inputProps={{ multiple: false }} onChange={(e)=>{replaceThumbnail(thumbnail, e.target.files[0],setThumbnail)}}/>
          <ResetThumbnailButton setter={()=>{resetThumbnail(image, thumbnail, setThumbnail)}}/>
        </Stack>
      </CardContent>
    </Card>
  );
}
