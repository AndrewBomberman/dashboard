import { Image, Button, Carousel } from "react-bootstrap";
export const ImageGallery = ({ gallery, selectedGallery, deleteSetectedImage, deleteImage }) => {
  return (
    <>
      {selectedGallery.length>0 && (
        
        <Carousel
          slide={false}
          variant="dark"
          id="imageGallerySlider"
          indicators={false}
          
        >
          {selectedGallery.map(image => {
            
            return (
              <Carousel.Item key={image} id={"carouselItemNumber" + image}>
                <Button
                  variant="danger"
                  className="btn w-100"
                  onClick={() => {
                    console.log("Delete")
                    const item = document.getElementById("carouselItemNumber" + image)
                    const slider = document.getElementById("imageGallerySlider")
                    
                    deleteSetectedImage(selectedGallery.filter(img => img !== image))
                    deleteImage(gallery.filter(img=>img.name!==image.name))
            
                    
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
