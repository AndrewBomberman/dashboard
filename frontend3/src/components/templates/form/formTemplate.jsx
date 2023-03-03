import { Button, Card, CardContent, CardHeader, Divider, Stack } from "@mui/material";
import { Form } from "react-router-dom";
import HotelFormTextFields from "../hotel/formTextFields";
import Thumbnail from "../thumbnail/Thumbnail";
import { useState } from "react";
import { EnableFormButton, SubmitButton } from "./formButtons";
import ImageGallery from "../imageGallery/ImageGallery";

export default function FormTemplate({ type, data, submit }) {
  const [editable, setEditable] = useState(true);

  const handleSubmit = (e)=>{
    e.preventDefault()
    const formData = new FormData();
    console.log(e)
    formData.append("name", e.target["name"].value);
    formData.append("discription", e.target["discription"].value);
    formData.append("address1", e.target["address1"].value);
    formData.append("address2", e.target["address2"].value);
    formData.append("country", e.target["country"].value);
    formData.append("city", e.target["city"].value);
    formData.append("thumbnail", e.target["thumbnail"].files[0]);
    for(let i=0;i<e.target["gallery"].files.length;i++) {
        console.log(e.target["gallery"].files[i])
        formData.append("gallery", e.target["gallery"].files[i])
    }
    submit(formData)
  }
  return (
    <div className="FormTemplate">
      <Card>
        <CardHeader title={"Edit"} sx={{ textAlign: "center" }} />
        <Divider sx={{ marginLeft: "10%", marginRight: "10%" }} />
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <Stack spacing={2}>
              
              <EnableFormButton enabled={editable} setter={setEditable}/>
              <SubmitButton />
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
                <Thumbnail image={data ? data.thumbnail:"http://localhost:8000/images/no-image.png"} />
              </Stack>

              <Card>
                <CardContent>
                  <ImageGallery gallery={data ? data.gallery:[]} />
                </CardContent>
              </Card>
            </Stack>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
