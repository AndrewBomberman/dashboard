import { Form } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import addFormFields from "./addFormFields";
import Typography from "@mui/material/Typography";
import { Divider, FormControl } from "@mui/material";
import Stack from "@mui/material/Stack";
import { addFormHandleSubmit } from "./addFormFieldsFunctions";

export default function AddRoomForm() {

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ padding: 3 }}>
          Add room
        </Typography>
        <Divider />
        <Form method="post" onSubmit={addFormHandleSubmit}>
          <Stack spacing={1}>
            {addFormFields.map((field) => {
              return (
                <FormControl key={Math.random() * 10}>{field}</FormControl>
              );
            })}
          </Stack>
        </Form>
      </CardContent>
    </Card>
  );
}
