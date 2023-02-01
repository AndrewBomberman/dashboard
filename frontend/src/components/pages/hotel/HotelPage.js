import { useParams } from "react-router-dom";
import { useGetHotel } from "../../../api/controllers/HotelController/useGetHotel";
import EditHotel from "../../forms/edit/EditHotel";
import { useState } from "react";
import {
  Image,
  Card,
  Button,
  Form,
  Row,
  Col,
  Carousel,
  Spinner,
  FormGroup,
} from "react-bootstrap";
import { ImageGallery } from "../../ImageGallery";

export default function HotelPage() {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetHotel(id);
  const [thumbnail, setThumbnail] = useState();
  const [gallery, setGallery] = useState([]);
  const [name, setName] = useState("");

  function blobToFile(theBlob, fileName) {
    return new File([theBlob], fileName, {
      lastModified: new Date().getTime(),
    });
  }

  const formData = new FormData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    for (let i = 0; i < gallery.length; i++) {
      gallery[i] = blobToFile(gallery[i], "img" + i + ".jpg");
      formData.append("gallery", gallery[i]);
    }

    formData.append("name", name);
    formData.append("thumbnail", blobToFile(thumbnail, "thumbnail.jpg"));
    await fetch("http://localhost:8000/api/v1/hotels?_id="+id, {
      method: "PUT",
      mode: "cors",
      body: formData,
    });
    setGallery("")
    setThumbnail("")
    setName("")
  };

 

  while (isLoading || isFetching) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
 const blobtest = blobToFile("blob:http://localhost:3000/97bfd6fc-3bc3-416c-81c5-180b1ed0244e")
 const blobtestlink = URL.createObjectURL(blobtest)
console.log(blobtestlink)

  return (
    <div className="HotelPage">
      <Row>
        <Col md={8} lg={12}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Image className="d-block" height={275} src={blobtestlink}
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  setThumbnail(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </Form.Group>
            <Button
              onClick={() => {
                console.log("add image to gallery");
                document.getElementById("addImageToGallery").click();
              }}
            >
              Add Image
            </Button>
            <Form.Group className="mb-3">
              <Form.Label>Image Gallery</Form.Label>
              <Form.Control
                id="addImageToGallery"
                type="file"
                className="d-none"
                onChange={(e) => {
                  setGallery([
                    ...gallery,
                    URL.createObjectURL(e.target.files[0]),
                  ]);
                  e.target.value = "";
                }}
              />
            </Form.Group>
            <FormGroup>
              <ImageGallery
                selectedGallery={gallery}
                deleteSetectedImage={setGallery}
              />
            </FormGroup>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
