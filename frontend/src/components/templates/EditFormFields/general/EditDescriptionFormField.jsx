import {
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl,
    IconButton,
    Stack,
    TextField,
  } from "@mui/material";
  import EditIcon from "@mui/icons-material/Edit";
  import SaveIcon from "@mui/icons-material/Save";
  import RefreshIcon from "@mui/icons-material/Refresh";
  import { useState } from "react";
  import { updateDescriptionService } from "../../../../api/services/generalServices";
  export default function HotelEditDescriptionFormField({ model, route }) {
    const [editable, setEditable] = useState(false);
    const [modelDescription, setModelDescription] = useState(
      model.description ?? ""
    );
  
    const updateModelDescription = async () => {
      const formData = new FormData();
      formData.append("description", modelDescription);
      setEditable(false);
      await updateDescriptionService(model._id, formData, route);
    };
    return (
      <div className="HotelDescriptionFormField">
        <Stack direction={"row"} spacing={1}>
          <FormControl fullWidth>
            <TextField
              type="text"
              name="description"
              value={modelDescription}
              label="Description"
              required
              disabled={!editable}
              onChange={(e) => {
                setModelDescription(e.target.value);
              }}
            />
          </FormControl>
          <FormControl>
            <IconButton color="success" onClick={() => setEditable(!editable)}>
              <EditIcon />
            </IconButton>
          </FormControl>
          <FormControl>
            <IconButton
              color="primary"
              disabled={!editable}
              onClick={updateModelDescription}
            >
              <SaveIcon />
            </IconButton>
          </FormControl>
          <FormControl>
            <IconButton
              color="success"
              disabled={!editable}
              onClick={() => {
                setModelDescription(model.description ?? "");
              }}
            >
              <RefreshIcon />
            </IconButton>
          </FormControl>
        </Stack>
      </div>
    );
  }
  