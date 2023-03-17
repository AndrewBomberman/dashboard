import {
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Stack,
  TextField,
} from "@mui/material";

export default function HotelFormTextFields({ editable, hotel }) {
  return (
    <Card sx={{ width: "100%" }}>
      <CardHeader title="Contact" sx={{ textAlign: "center" }} />
      <CardContent>
        <Stack spacing={2}>
          <FormControl>
            <TextField
              type="text"
              name="name"
              value={hotel && hotel.name}
              label="Name"
              placeholder="Name"
              required
              disabled={editable}
            />
          </FormControl>
          <FormControl>
            <TextField
              id="outlined-basic2"
              name="description"
              variant="outlined"
              placeholder="Description (optional)"
              label="Description"
              multiline
              value={hotel && hotel.description}
              rows={5}
              disabled={editable}
            />
          </FormControl>
          <FormControl>
            <TextField
              type="email"
              name="email"
              value={hotel && hotel.email}
              label="E-Mail"
              required
              placeholder="E-Mail"
              disabled={editable}
            />
          </FormControl>
          <FormControl>
            <TextField
              type="phone"
              name="phone"
              value={hotel && hotel.phone}
              label="Phone"
              required
              placeholder="Phone"
              disabled={editable}
            />
          </FormControl>
          <FormControl>
            <TextField
              type="text"
              name="address1"
              value={hotel && hotel.address.address1}
              label="Address1"
              placeholder="Address 1"
              disabled={editable}
              required
            />
          </FormControl>
          <FormControl>
            <TextField
              type="text"
              name="address2"
              value={hotel && hotel.address.address2}
              label="Address2"
              placeholder="Address 2"
              disabled={editable}
            />
          </FormControl>
         
        </Stack>
      </CardContent>
    </Card>
  );
}
