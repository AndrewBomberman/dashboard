import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RefreshIcon from "@mui/icons-material/Refresh";
import { FormControl } from "@mui/material";
import { resetCountrySelect } from "./addFormFieldFunctions";
export default [
  {
    id: "submitButton",
    render: (
      <FormControl>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </FormControl>
    ),
  },
  {
    id: "resetButton",
    render: (
      <FormControl>
        <IconButton color="success" aria-label="reset-form" type="reset" onClick={resetCountrySelect}>
          <RefreshIcon />
        </IconButton>
      </FormControl>
    ),
  },
];
