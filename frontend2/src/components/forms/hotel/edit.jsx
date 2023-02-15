import { Image, Card, Button, Form, Row, Col, Badge } from "react-bootstrap";
import { BiReset } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useEditHotel from "../../../api/controllers/hotelController/useEditHotel"
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageGallery from "../../imageGallery";
export default function EditHotel({ hotel }) {
  const navigate = useNavigate();
  const [selectedThumbnail, setSelectedThumbnail] = useState(hotel.thumbnail);
  const [thumbnail, setThumbnail] = useState(hotel.thumbnail);
  const [selectedGallery, setSelectedGallery] = useState(hotel.gallery);
  const [gallery, setGallery] = useState(hotel.gallery);
  const [name, setName] = useState(hotel.name);
  const [address1, setAddress1] = useState(hotel.address.address1);
  const [address2, setAddress2] = useState(hotel.address.address2);
  const [postcode, setPostcode] = useState(hotel.address.postcode);
  const [phone, setPhone] = useState(hotel.phone);
  const [streetNumber, setStreetNumber] = useState(hotel.address.nr);
  const [email, setEmail] = useState(hotel.email);
  const [city, setCity] = useState(hotel.address.city);
  const [country, setCountry] = useState(hotel.address.country);
  const [show, setShow] = useState(hotel.display);

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

    document.getElementById("setImageGallery").value = "";
    document.getElementById("setThumbnail").value = "";
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("address1", address1);
    formData.append("address2", address2);
    formData.append("postcode", postcode);
    formData.append("streetNumber", streetNumber);
    formData.append("city", city);
    formData.append("country", country);
    formData.append("thumbnail", thumbnail);
    gallery.forEach((image) => {
      formData.append("gallery", image);
    });
    await useEditHotel(hotel._id, formData)
    navigate("/hotels")
    
  };

  return (
    <div className="EditHotel">
         <Row>
        <Col md={3} lg={6}>
          <Card bg="primary" text="light">
            <Card.Header className="text-center">
              <h2>Edit Hotel Form</h2>
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
                    id="setName"
                    type="text"
                    placeholder="Hotel Name"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Thumbnail</Form.Label>
                  <Form.Control
                    id="setThumbnail"
                    type="file"
                    multiple={false}
                    onChange={(e) => setThumbnailImage(e)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Image Gallery</Form.Label>
                  <Form.Control
                    id="setImageGallery"
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
                    className="align-items-right"
                    onClick={(e) => resetForm(e)}
                  >
                    <BiReset />
                  </Button>
                </Form.Group>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9} lg={6}>
          <Card bg="primary" text="light">
            <Card.Header><h2 className="text-center">Hotel Address</h2></Card.Header>
            <Card.Body>
            <Form.Group>
                <Form.Label aria-required>Street Number</Form.Label>
                <Form.Control
                  id="setStreetNumber"
                  type="number"
                  min={0}
                  required={true}
                  placeholder="Street Number"
                  onChange={(e) => {
                    setStreetNumber(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label aria-required>Address Line</Form.Label>
                <Form.Control
                  id="setAddress1"
                  type="text"
                  required={true}
                  placeholder="Address Line 1"
                  onChange={(e) => {
                    setAddress1(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label aria-required>Address Line 2</Form.Label>
                <Form.Control
                  id="setAddress2"
                  type="text"
                  placeholder="Address Line 2"
                  onChange={(e) => {
                    setAddress2(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label aria-required>Postcode</Form.Label>
                <Form.Control
                  id="setPostcode"
                  type="text"
                  placeholder="Postcode"
                  required={true}
                  onChange={(e) => {
                    setPostcode(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label aria-required>Phone</Form.Label>
                <Form.Control
                  id="setPhone"
                  type="text"
                  placeholder="Phone"
                  required={true}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
                <Form.Group>
                <Form.Label aria-required>E-Mail</Form.Label>
                <Form.Control
                  id="setEmail"
                  type="email"
                  required={true}
                  placeholder="E-mail address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              </Form.Group>
              <Form.Group>
                  <Form.Label aria-required>City</Form.Label>
                  <Form.Control
                    id="setCity"
                    type="text"
                    required={true}
                    placeholder="City"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label aria-required>Country</Form.Label>
                  <Form.Control
                    id="setCountry"
                    type="text"
                    required={true}
                    placeholder="Country"
                    onChange={(e) => {
                      setCountry(e.target.value);
                    }}
                  />
                </Form.Group>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="p-3">
        <Col md={10} lg={12}>
          <Badge>
            <h2 className="p-3 text-center">Image Gallery Preview</h2>
          </Badge>
          <ImageList cols={6} className="p-3">
            {selectedGallery.map((image) => (
              <ImageListItem key={image}>
                <Image src={image} loading="lazy" height={300} width={300} />
              </ImageListItem>
            ))}
          </ImageList>
        </Col>
      </Row>
    </div>
  );
}
