import { useState } from "react";
import { Image, Card, Button, Form, Row, Col, Badge } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ImageGallery from "../../imageGallery";
import { BiReset } from "react-icons/bi";

export default function AddHotel() {
  const navigate = useNavigate();
  const [selectedThumbnail, setSelectedThumbnail] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [name, setName] = useState("");

  const setImageGallery = (e) => {
    let selectedGalleryImages = [];
    let galleryImages = [];

    for (let i = 0; i < e.target.files.length; i++) {
      selectedGalleryImages.push(URL.createObjectURL(e.target.files[i]));
      galleryImages.push(e.target.files[i]);
    }

    setSelectedGallery(selectedGalleryImages);
    setGallery(galleryImages);
  };

  const deleteGalleryImage = (image) => {
    setSelectedGallery([...selectedGallery.filter((img) => img !== image)]);
  };

  const setThumbnailImage = (e) => {
    setSelectedThumbnail(URL.createObjectURL(e.target.files[0]));
    setThumbnail(e.target.files[0]);
  };
  const resetForm = (e) => {
    setSelectedThumbnail("");
    setThumbnail("");
    setSelectedGallery([]);
    setGallery([]);
    setName("");

    const text = document.getElementById("text_input");
    console.log(text.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("th%umbnail", thumbnail);
    gallery.forEach((image) => {
      formData.append("gallery", image);
    });
  };

  return (
    <div className="AddHotelForm">
      <Row>
        <Col md={3} lg={6}>
          <Card bg="primary" text="light">
            <Card.Header className="text-center">
              <h2>Add Hotel Form</h2>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit} encType="multipart/form-data">
                <Form.Group className="mb-3">
                  {selectedThumbnail ? (
                    <Image
                      className="d-block w-100"
                      height={300}
                      width="100%"
                      src={selectedThumbnail}
                    />
                  ) : (
                    <Image
                      src="http://localhost:8000/images/sample/no-image.png"
                      height={300}
                      width="100%"
                    ></Image>
                  )}
                </Form.Group>
                <Form.Group>
                  <Form.Label aria-required>Name</Form.Label>
                  <Form.Control
                    id="text_input"
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
                    multiple={false}
                    onChange={(e) => setThumbnailImage(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image Gallery</Form.Label>
                  <Form.Control
                    id="addImageToGallery"
                    type="file"
                    multiple={true}
                    onChange={(e) => setImageGallery(e)}
                  />
                </Form.Group>
                <Form.Group>
                  <ImageGallery
                    gallery={selectedGallery}
                    deleteImage={deleteGalleryImage}
                  ></ImageGallery>
                </Form.Group>
                <Form.Group className="p-3">
                  <Button variant="light" type="submit">
                    Submit
                  </Button>
                  <Button
                    variant="success"
                    className="align-items-left"
                    onClick={(e) => resetForm(e)}
                  >
                    <BiReset />
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="p-3">
        <Badge cl>
          <h2 className="p-3">Image Gallery Preview</h2>
        </Badge>
        {selectedGallery.map((image) => {
          return (
            <Col md={4} className="p-3">
              <Image src={image} width={400} height={400}></Image>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
