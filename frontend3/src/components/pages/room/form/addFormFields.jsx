import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';


export default [
  <TextField id="outlined-basic" name="name"variant="outlined" placeholder="Name" label="Name" required/>,
  <Input type="file" name="thumbnail"/>,
  <Input type="file" inputProps={{
    multiple: true
  }} name="gallery"/>,
  <Button variant="contained" type="submit">Primary</Button>
];
