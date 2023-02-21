import Input from "@mui/material/Input";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CountryList from "../../../../lists/countryAndCityList";
import { FormControl } from "@mui/material";
import Chip from '@mui/material/Chip';
export default [
    {
        id: "address1Input",
        render: (
          <FormControl>
            <TextField
              id="outlined-basic"
              name="address1"
              variant="outlined"
              placeholder="Address1"
              label="Address1"
              required
            />
          </FormControl>
        ),
      },
      {
        id: "address2Input",
        render: (
          <FormControl>
            <TextField
              id="outlined-basic"
              name="address2"
              variant="outlined"
              placeholder="Address2"
              label="Address2 (optional)"
              ty
            />
          </FormControl>
        ),
      },
      {
        id: "phone",
        render: (
          <FormControl>
            <TextField
              id="outlined-basic"
              name="phone"
              variant="outlined"
              placeholder="Phone"
              label="Phone"
              type="phone"
              required
            />
          </FormControl>
        ),
      },
      {
        id: "email",
        render: (
          <FormControl>
            <TextField
              id="outlined-basic"
              name="email"
              variant="outlined"
              placeholder="E-Mail"
              label="E-Mail"
              type="email"
              required
            />
          </FormControl>
        ),
      },
      {
        id: "countryInput",
        render: <CountryList />,
      },
]