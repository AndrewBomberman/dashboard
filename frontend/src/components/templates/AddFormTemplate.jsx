import { addService } from "../../api/services/generalServices";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  FormControl,
  IconButton,
  TextField,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { useState } from "react";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
export default function AddFormTemplate({ route }) {
  const [name, setName] = useState();
  const [open, setOpen] = useState(false);
  return (
    <div className="AddFormTemplate">
      <Snackbar open={open} autoHideDuration={3000} anchorOrigin={{vertical:"top" , horizontal:"center"}} sx={{width:"50%"}}>
        <Alert onClose={()=>setOpen(false)} severity="success" sx={{ width: "100%" }}>
          Added
        </Alert>
      </Snackbar>
      <Card>
        <CardHeader title="Add" />
        <CardContent>
          <FormControl fullWidth>
            <TextField
              label="Name"
              placeholder="Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
          </FormControl>
        </CardContent>
        <CardActions>
          <IconButton
            color="primary"
            onClick={async () => {
              const formData = new FormData();
              formData.append("name", name);
              await addService(formData, route);
              setOpen(true)
            }}
          >
            <SaveIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
