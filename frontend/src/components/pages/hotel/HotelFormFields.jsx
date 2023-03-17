import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";
import Thumbnail from "../../templates/Thumbnail";
import Gallery from "../../templates/Gallery";
import { useContext } from "react";
import { FormContext } from "../../templates/FormTemplate";

export default function HotelFormFields({ hotel }) {
  const context = useContext(FormContext);
  const setFormField = (e) => {
    context.setFormFields(e.target.name, e.target.value);
  };

  return (
    <Stack spacing={2}>
      <Thumbnail image={hotel.thumbnail}/>
      <FormControl>
        <TextField
          type="text"
          name="name"
          defaultValue={hotel && hotel.name}
          label="Name"
          placeholder="Name"
          required
          disabled={!context.editable}
          onChange={setFormField}
        />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-basic2"
          name="description"
          defaultValue={hotel && hotel.description}
          variant="outlined"
          placeholder="Description (optional)"
          label="Description"
          multiline
          rows={5}
          disabled={!context.editable}
          onChange={setFormField}
        />
      </FormControl>
      <FormControl>
        <TextField
          type="email"
          name="email"
          defaultValue={hotel && hotel.email}
          label="E-Mail"
          required
          placeholder="E-Mail"
          disabled={!context.editable}
          onChange={setFormField}
        />
      </FormControl>
      <FormControl>
        <TextField
          type="phone"
          name="phone"
          defaultValue={hotel && hotel.phone}
          label="Phone"
          required
          placeholder="Phone"
          disabled={!context.editable}
          onChange={setFormField}
        />
      </FormControl>
      <FormControl>
        <TextField
          type="text"
          name="address1"
          defaultValue={hotel && hotel.address && hotel.address.address1}
          label="Address1"
          placeholder="Address 1"
          disabled={!context.editable}
          required
          onChange={setFormField}
        />
      </FormControl>
      <FormControl>
        <TextField
          type="text"
          name="address2"
          defaultValue={hotel && hotel.address && hotel.address.address2}
          label="Address2"
          placeholder="Address 2"
          disabled={!context.editable}
          onChange={setFormField}
        />
      </FormControl>
      <FormControl>
        <Gallery images={hotel.gallery}/>
      </FormControl>
    </Stack>
  );
}
