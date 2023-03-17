import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
} from "@mui/material";
import { Form } from "react-router-dom";
import HotelFormTextFields from "../hotel/formTextFields";
import Thumbnail from "../thumbnail/Thumbnail";
import { useState } from "react";
import { EnableFormButton, SubmitButton } from "./formButtons";
import ImageGallery from "../imageGallery/ImageGallery";
import { handleSubmit } from "../hotel/formFunctions";
import { useNavigate } from "react-router-dom";

export default function FormTemplate({ type, data, submit, title }) {
  const [editable, setEditable] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="FormTemplate">
      <Form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit(e, submit)
        navigate("/hotels")
        }}>
        <Card>
          <CardHeader title={title} sx={{ textAlign: "center" }} />
          <Divider sx={{ marginLeft: "10%", marginRight: "10%" }} />
          <CardContent>
            <Stack spacing={2}>
              <Stack direction={"row"} spacing={2}>
                {type === "hotel" ? (
                  <HotelFormTextFields
                    editable={editable}
                    hotel={data}
                    setter={setEditable}
                  />
                ) : (
                  <div>Room</div>
                )}
                <Thumbnail image={data && data.thumbnail} />
              </Stack>

              <ImageGallery gallery={data ? data.gallery : []} />
            </Stack>
          </CardContent>
          <CardActions sx={{justifyContent:"center"}}>
            <EnableFormButton enabled={editable} setter={setEditable} />
            <SubmitButton />
          </CardActions>
        </Card>
      </Form>
    </div>
  );
}
