import { Form } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import addFormProfileFields from "./addFormProfileFields";
import { CardHeader } from "@mui/material";
import Stack from "@mui/material/Stack";
import { addFormHandleSubmit } from "../addHotel/addFormFieldFunctions"
import React from "react";
import addFormContactFields from "./addFormContactFields";
import Typography from "@mui/material/Typography";

export default function AddHotelForm() {
  return (
    <Card>
      <CardHeader title="Add Hotel" />
      <CardContent>
        <Form method="post" onSubmit={addFormHandleSubmit}>
          <Stack spacing={1} alignItems={"stretch"}>
            {addFormProfileFields.map((field) => {
              return (
                <React.Fragment key={field.id}>{field.render}</React.Fragment>
              );
            })}
            <Typography gutterBottom variant="h5" component="div">
              Contact
            </Typography>
            {addFormContactFields.map((field) => {
              return (
                <React.Fragment key={field.id}>{field.render}</React.Fragment>
              );
            })}
          </Stack>
        </Form>
      </CardContent>
    </Card>
  );
}
