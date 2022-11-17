import { Image, Card, Button, Form, Carousel } from "react-bootstrap";
import { BiImageAdd } from "react-icons/bi";

export const ImageGallery = ({ gallery, selector, manager }) => {
  return (
    <>
      <Card bg="success" text="white">
        <Card.Body>
          <Card.Title className="text-center bg-dark p-2">
            Image Gallery
          </Card.Title>
          {(gallery.length > 0 && (
            <Carousel slide={false} variant="dark" id="imageGallerySlider" indicators={false}>
              {gallery.map((image) => {
                return (
                  <Carousel.Item key={image}>
                    <Button
                      variant="danger"
                      className="btn w-100"
                      onClick={() => {
                        
                        manager(gallery.filter((img) => img !== image));
                        const slider = document.getElementById("imageGallerySlider")
                        
                      }}
                    >
                      Delete
                    </Button>
                    <Image className="d-block w-100" src={image} height={275} />
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
              onChange={(e) => selector(e)}
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
            selector(e);
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
        <Form.Label>Name: {name}</Form.Label>
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
