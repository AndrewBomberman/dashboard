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
import { ImageGallery, NameForm, Thumbnail } from "./EditHotelComponents";

export default function EditHotel({ hotel }) {
  const [selectedThumbnailImage, setSelectedThumbnailImage] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [selectedGaleryImage, setSelectedGaleryImage] = useState();
  const [imageGallery, setImageGallery] = useState(hotel.image_gallery);
  const [name, setName] = useState(hotel && hotel.name);
  

  useEffect(() => {
    if (selectedThumbnailImage) {
      const thumbnailObjectUrl = URL.createObjectURL(selectedThumbnailImage);
      setThumbnail(thumbnailObjectUrl);
      return () => URL.revokeObjectURL(thumbnailObjectUrl);
    }
    if (selectedGaleryImage) {
      const imageGalleryObjectUrl = URL.createObjectURL(selectedGaleryImage);
      setImageGallery([...imageGallery, imageGalleryObjectUrl]);
      return () => URL.revokeObjectURL(imageGalleryObjectUrl);
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
  const handleReset = () => {
    setImageGallery([]);
    setThumbnail();
  };

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
                <Thumbnail
                  image={thumbnail}
                  selector={(newImage) => onSelectThumbnailImage(newImage)}
                />
                <NameForm
                  name={name}
                  selector={(newName) => setName(newName)}
                />

                <Button
                  id="save"
                  variant="dark"
                  type="submit"
                  name="save"
                  className="float-right"
                >
                  Save <BiSave />
                </Button>
                <Button
                  id="cancel"
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
          <ImageGallery
            gallery={imageGallery}
            selector={(newImage) => onSelectGaleryImage(newImage)}
            manager={(newGallery) => {
              console.log(newGallery)
              setImageGallery(newGallery)}}
          />
        </Col>
      </Row>
    </div>
  );
}
