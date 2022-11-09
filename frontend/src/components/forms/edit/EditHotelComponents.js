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
import { BiImageAdd, BiSave } from "react-icons/bi";

export const ImageGallery = ({ gallery, selector, manager}) => {
  return (
    <>
      <Card bg="success" text="white">
        <Card.Body>
          <Card.Title className="text-center bg-dark p-2">
            Image Gallery
          </Card.Title>
          {(gallery.length > 0 && (
            <Carousel slide={false} variant="dark">
              {gallery.map((image) => {
                return (
                  <Carousel.Item key={image}>
                    <Image
                      id={image}
                      onMouseOver={() => {
                        console.log("mouse over");
                        document
                          .getElementById("deleteGalleryImage")
                          .classList.remove("d-none");
                      }}
                      onMouseLeave={() => {
                        document
                          .getElementById("deleteGalleryImage")
                          .classList.add("d-none");
                        console.log("mouse left");
                      }}
                      className="d-block w-100"
                      src={image}
                      height={275}
                    />
                    <Carousel.Caption
                      className="d-none"
                      id="deleteGalleryImage"
                    >
                      <Image
                        className="d-block w-100"
                        height={200}
                        src="https://visualpharm.com/assets/95/Trash-595b40b75ba036ed117d729a.svg"
                        onClick={() => {
                          manager(gallery.filter((img) => img != image));
                        }}
                      />
                    </Carousel.Caption>
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
    </>
  );
};

export const Thumbnail = ({ image, selector }) => {
  return (
    <>
      {(image && (
        <Image className="d-block w-100" src={image} height={275} />
      )) || (
        <Button
          variant="dark"
          className="btn w-100"
          onClick={() => {
            document.getElementById("thumbnail").click();
          }}
        >
          <BiImageAdd />
        </Button>
      )}
      <Form.Group controlId="thumbnail" className="d-none">
        <Form.Control
          className="d-none"
          type="file"
          accept="image/*"
          name="thumbnail"
          onChange={(e) => {
            selector(e.target.files[0]);
          }}
        />
      </Form.Group>
    </>
  );
};

export const NameForm = ({ name, selector }) => {
  return (
    <>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name={name}
          onChange={(e) => {
            selector(e.target.value);
          }}
        />
      </Form.Group>
    </>
  );
};
