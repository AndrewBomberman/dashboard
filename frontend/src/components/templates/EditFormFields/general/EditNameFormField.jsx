import {
    FormControl,
    IconButton,
    Stack,
    TextField,
  } from "@mui/material";
  import EditIcon from "@mui/icons-material/Edit";
  import SaveIcon from "@mui/icons-material/Save";
  import RefreshIcon from "@mui/icons-material/Refresh";
  import { useState } from "react";
  import { updateNameService } from "../../../../api/services/generalServices";
  export default function EditNameFormField({ model, route}) {
    const [editable, setEditable] = useState(false);
    const [modelName, setModelName] = useState(model.name ?? "");
  
    const updateModelName = async () => {
      const formData = new FormData();
      formData.append("name", modelName);
      setEditable(false);
      await updateNameService(model._id, formData, route);
    };
    return (
      <div className="HotelNameFormField">
        <Stack direction={"row"} spacing={1}>
          <FormControl fullWidth>
            <TextField
              type="text"
              name="name"
              value={modelName}
              label="Name"
              placeholder="Name"
              required
              disabled={!editable}
              onChange={(e) => {
                setModelName(e.target.value);
                console.log(modelName);
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
              onClick={updateModelName}
            >
              <SaveIcon />
            </IconButton>
          </FormControl>
          <FormControl>
            <IconButton
              color="success"
              disabled={!editable}
              onClick={() => {
                setModelName(model.name ?? "");
              }}
            >
              <RefreshIcon />
            </IconButton>
          </FormControl>
        </Stack>
      </div>
    );
  }
  