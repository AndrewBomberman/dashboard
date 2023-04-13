import { Form } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Stack,
  TextField,
} from "@mui/material";
import useAddHotelQuery from "../../../api/internal/queries/hotel/useAddHotelQuery";
import { useState } from "react";
import AddHotelForm from "../../templates/AddFormFields/hotel/AddHotelForm";
export default function AddHotelPage() {
  const [visibleHotelForm, setVisibleHotelForm] = useState(false);
  const [visibleRoomForm, setVisibleRoomForm] = useState(false);

  return (
    <div className="AddHotelPage">
      <Stack spacing={2}>
        <Button
          variant="contained"
          onClick={() => setVisibleHotelForm(!visibleHotelForm)}
        >
          Add Hotel
        </Button>
        {visibleHotelForm && <AddHotelForm />}
        <Button
          variant="contained"
          onClick={() => setVisibleRoomForm(!visibleRoomForm)}
        >
          Add Room
        </Button>
        
      </Stack>
    </div>
  );
}
