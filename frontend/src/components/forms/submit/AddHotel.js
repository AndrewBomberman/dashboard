import {
  Image,
  Card,
  Spinner,
  Button,
  Form,
  Row,
  Col,
  Carousel,
  FormGroup,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { BiImageAdd, BiSave } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { NameForm, Thumbnail } from "./AddHotelComponents";
import { ImageGallery } from "../../ImageGallery";
import { useAddHotel } from "../../../api/controllers/HotelController/useAddHotel";

export default function AddHotel() {
  const [selectedThumbnail, setSelectedThumbnail] = useState();
  const [thumbnail , setThumbnail] = useState();
  const [selectedGallery, setSelectedGallery] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [name, setName] = useState("");
  
   const setGalleryImage = (image)=>{
    setSelectedGallery([...selectedGallery, URL.createObjectURL(image)])
    setGallery([...gallery,image])
   }
   const deleteGalleryImage = (image)=>{
    setSelectedGallery([...selectedGallery.filter(img=>img!==image)])
   }
   const setThumbnailImage = (image)=>{
    setSelectedThumbnail(URL.createObjectURL(image))
    setThumbnail(image)
   }
  

 
  const formData = new FormData();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedGallery)
    console.log(gallery)
    setSelectedGallery("")
    setSelectedThumbnail("")
    setName("")

    formData.append("thumbnail", thumbnail)
    gallery.forEach(image => {
      formData.append("gallery", image)
    });
    
    formData.append("name", name)
    
    await fetch("http://localhost:8000/api/v1/hotels", {
      method:"POST",
      mode:"cors",
      body: formData
      
    })
  };

  return (
    <div className="AddHotelForm">
      <Row>
        <Col md={8} lg={12}>
          <Form onSubmit={handleSubmit} encType="multipart/form-data">
            <Form.Group className="mb-3">
              {selectedThumbnail && (
                <Image className="d-block" height={275} src={selectedThumbnail} />
              )}
              <Form.Label aria-required>Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => {setName(e.target.value);}}
              />
            </Form.Group>
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
            <FormGroup>
              <ImageGallery
                gallery={selectedGallery}
                deleteSetectedImage={deleteGalleryImage}
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
