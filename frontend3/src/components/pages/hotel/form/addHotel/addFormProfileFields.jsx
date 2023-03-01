import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import { FormControl } from "@mui/material";
import Chip from '@mui/material/Chip';

export default [
  {
    id: "nameInput",
    render: (
      <FormControl>
        <TextField
          id="outlined-basic"
          name="name"
          variant="outlined"
          placeholder="Name"
          label="Name"
          required
        />
      </FormControl>
    ),
  },
  {
    id: "descriptionInput",
    render: (
      <FormControl>
        <TextField
          id="outlined-basic2"
          name="discription"
          variant="outlined"
          placeholder="Description (optional)"
          label="Description"
          multiline
          rows={5}
        />
      </FormControl>
    ),
  },
  
  {
    id: "thumbnailInput",
    render: (
      <FormControl>
         <Chip label="Select Thumbnail" />
        <Input type="file" name="thumbnail" disableUnderline/>
      </FormControl>
    ),
  },
  {
    id: "galleryInput",
    render: (
      <FormControl>
         <Chip label="Select Gallery Images" />
        <Input
          type="file"
          inputProps={{
            multiple: true,
          }}
          name="gallery"
          disableUnderline
          
        />
      </FormControl>
    ),
  },
];
