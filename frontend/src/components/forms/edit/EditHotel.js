import {
  Image,
  Card,
  Spinner,
  Button,
  Form,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import { BiImageAdd, BiSave } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { ImageGallery, Thumbnail } from "./EditHotelComponents";



export default function EditHotel() {
  const [selectedThumbnailImage, setSelectedThumbnailImage] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [selectedGaleryImage, setSelectedGaleryImage] = useState();
  const [imageGallery, setImageGallery] = useState([]);
  const [name, setName ] = useState()

  useEffect(() => {
   
    if (selectedThumbnailImage) {
      const thumbnailObjectUrl = URL.createObjectURL(selectedThumbnailImage);
      setThumbnail(thumbnailObjectUrl);
      return ()=>URL.revokeObjectURL(thumbnailObjectUrl)
    }
    if (selectedGaleryImage) {
      const imageGalleryObjectUrl = URL.createObjectURL(selectedGaleryImage);
      setImageGallery([imageGalleryObjectUrl,...imageGallery]);
      return ()=>URL.revokeObjectURL(imageGalleryObjectUrl)
    }
  }, [selectedThumbnailImage, selectedGaleryImage]);

  const onSelectThumbnailImage = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedThumbnailImage(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple
    setSelectedThumbnailImage(e.target.files[0]);
  };
  const onSelectGaleryImage = (e) => {
    setSelectedGaleryImage(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    e.target.reset();
  };
  const handleReset = ()=>{
    setImageGallery([])
    setThumbnail()
  }

  return (
    <div className="EditHotelForm">
      <Row>
        <Col lg={6} md={4}>
          <Card bg="success" text="white">
            <Card.Body>
              <Card.Title className="text-center bg-dark p-2">
                Hotel Profile
              </Card.Title>

              <Form
                id="EditForm"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                method="POST"
              >
                <Thumbnail image={thumbnail} selector={newImage=>onSelectThumbnailImage(newImage)}/>
               
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Name: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter name"
                    name={name}
                    onChange={(e)=>{
                      setName(e.target.value)
                    }}
                  />
                </Form.Group>
                
                <Button id="save"
                  variant="dark"
                  type="submit"
                  name="save"
                  className="float-right"
                >
                  Save <BiSave />
                </Button>
                <Button id="cancel"
                  variant="danger"
                  type="submit"
                  name="cancel"
                  className="float-end"
                  onClick={handleReset}
                >
                  Cancel <MdCancel />
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={6} md={4}>
          <Card bg="success" text="white">
            <Card.Body>
              <Card.Title className="text-center bg-dark p-2">
                Image Gallery
              </Card.Title>
              {(imageGallery.length > 0 && (
                <Carousel slide={false} variant="dark">
                  {imageGallery.map(image => {
                    return (
                      <Carousel.Item key={image}>
                        <Button variant="danger" className="btn w-100"  onClick={() => {
                             console.log(image)
                             setImageGallery(imageGallery.filter(img=>img!==image))
                            }}>Delete</Button>
                        <Image 
                          className="d-block w-100"
                          src={image}
                          height={275}
                        />
                      
                      </Carousel.Item>
                    );
                  })}
                </Carousel>
              )) || (
                <Card.Subtitle className="text-center">No Images</Card.Subtitle>
              )}

              <Form.Group controlId="imageGallery" className="d-none">
                <Form.Control
                  className="d-none"
                  type="file"
                  accept="image/*"
                  name="imageGallery"
                  onChange={onSelectGaleryImage}
                />
              </Form.Group>
            </Card.Body>
            <Card.Footer>
              <Button
                variant="dark"
                className="btn w-100"
                onClick={() => {
                  document.getElementById("imageGallery").click();
                }}
              >
                <BiImageAdd />
              </Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
