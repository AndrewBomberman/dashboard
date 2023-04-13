import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  TextField,
  CardActions,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import { addService } from "../../../../api/services/generalServices";
import SaveIcon from "@mui/icons-material/Save";
import useAddRoomQuery from "../../../../api/internal/queries/room/useAddRoomQuery"

export default function AddRoomForm({hotel}) {
  const { mutate } = useAddRoomQuery()
  const [name, setName] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("name", name);
    formData.append("hotel_id", hotel._id);
    mutate(formData)
  };

  return (
    <div className="AddHotelForm">
      <Form onSubmit={handleSubmit}>
        <Card>
          <CardHeader title="Add Room" />
          <CardContent>
            <FormControl fullWidth>
              <TextField
                name="name"
                placeholder="Name"
                label="Name"
                fullWidth
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </FormControl>
          </CardContent>
          <CardActions>
            <IconButton type="submit reset" color="primary">
              <SaveIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Form>
    </div>
  );
}
