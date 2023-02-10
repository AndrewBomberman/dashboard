import { Image, Carousel } from "react-bootstrap";
const ImageGallery = ({ gallery, deleteImage }) => {
  console.log(gallery);
  return (
    <>
      {gallery.length > 0 ?? (
        <Carousel
          slide={false}
          variant="dark"
          id="imageGallerySlider"
          indicators={false}
        >
          {gallery.map((image) => {
            return (
              <Carousel.Item key={image} id={"carouselItemNumber" + image}>
                <Button
                  variant="danger"
                  className="btn w-100"
                  onClick={() => {
                    deleteImage(image);
                  }}
                >
                  Delete
                </Button>
                <Image className="d-block w-100" src={image} height={275} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      )}
    </>
  );
};
export default ImageGallery
