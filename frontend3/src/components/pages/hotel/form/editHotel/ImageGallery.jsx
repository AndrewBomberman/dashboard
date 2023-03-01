import { Card, CardContent, CardHeader, ImageList, ImageListItem, ImageListItemBar, Divider, IconButton, TextField} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
export default ({gallery, selector})=>{
    const addFilesToGallery = (newFiles)=>{
        
        for(let i=0;i<newFiles.length;i++){
            gallery.push(URL.createObjectURL(newFiles[i]))
        }
        console.log(gallery)
        selector([...gallery])
    }

    return (
        <Card sx={{ marginTop: 3 }}>
        <CardHeader title="Gallery" sx={{ textAlign: "center" }} />
        <Divider sx={{ marginRight: 50, marginLeft: 50 }} />
        <CardContent>
          {gallery ? <ImageList cols={5}>
            {gallery.map((image) => {
              return (
                <ImageListItem key={image}>
                  <img src={image} />
                  <ImageListItemBar
                    actionIcon={
                      <IconButton color="error" onClick={()=>{
                       console.log(gallery)
                       selector(gallery.filter(img=>img!==image))
                      }}>
                        <DeleteIcon />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              );
            })}
          </ImageList>: <img src="http://localhost:8000/images/no-image.png"/>}
          <TextField type="file" inputProps={{ multiple:true}} onChange={(e)=>{addFilesToGallery(e.target.files)}}/>

        </CardContent>
      </Card>
    )
}