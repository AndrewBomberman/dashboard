import { Image, Button, Form, Row, Col} from "react-bootstrap";

import { ImageGallery } from "../../ImageGallery";
import { useState } from "react";

export default function EditHotel({ hotel }) {
  console.log(hotel);
  const [selectedThumbnail, setSelectedThumbnail] = useState(hotel.thumbnail);
  const [thumbnail, setThumbnail] = useState(hotel.thumbnail);
  const [selectedGallery, setSelectedGallery] = useState(hotel.gallery);
  const [gallery, setGallery] = useState(hotel.gallery);
  const [name, setName] = useState(hotel.name);

  const setGalleryImage = (image) => {
    setSelectedGallery([...selectedGallery, URL.createObjectURL(image)]);
    setGallery([...gallery, image]);
  };
  const deleteGalleryImage = (image) => {
    setSelectedGallery([...selectedGallery.filter((img) => img !== image)]);
    setGallery([...gallery.filter((img) => img !== image)]);
  };
  const setThumbnailImage = (image) => {
    setSelectedThumbnail(URL.createObjectURL(image));
    setThumbnail(image);
  };

  const formData = new FormData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSelectedGallery("");
    setSelectedThumbnail("");
    setName("");

    formData.append("thumbnail", thumbnail);
    gallery.forEach((image) => {
      formData.append("gallery", image);
    });

    formData.append("name", name);

    await fetch("http://localhost:8000/api/v1/hotels", {
      method: "PUT",
      mode: "cors",
      body: formData,
    });
  };

  return (
    <div className="EditHotelForm">
      <Row>
        <Col md={8} lg={12}>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            {selectedThumbnail && (
              <Form.Group className="mb-3">
                <Button
                  variant="danger"
                  className="btn w-100"
                  onClick={() => {
                    setSelectedThumbnail("");
                  }}
                >
                  Delete
                </Button>
                <Image
                  className="d-block"
                  height={275}
                  src={selectedThumbnail}
                />
                
                <Form.Label aria-required>Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
                
              </Form.Group>
            )}
            <Form.Group className="mb-3">
              <Form.Label>Thumbnail</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setThumbnailImage(e.target.files[0])}
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
                onChange={(e) => setGalleryImage(e.target.files[0])}
              />
            </Form.Group>
            <Form.Group>
              <ImageGallery
                gallery={selectedGallery}
                deleteSetectedImage={deleteGalleryImage}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
