import { TextField } from "@mui/material";
export default [
  {
    id: "name",
    field: (
      <TextField type="text" name="name" label="Name" required fullWidth />
    ),
  },
  {
    id: "email",
    field: (
      <TextField type="email" name="email" label="E-Mail" required fullWidth />
    ),
  },
  {
    id: "password",
    field:<TextField type="password" name="password" label="Password" required/>
  }
];
