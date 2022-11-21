import { Button, Form, Image } from "react-bootstrap";
import { useEffect, useState } from "react";

export default function Test (){
    const [selectedThumbnailImage, setSelectedThumbnailImage] = useState("");
    const [thumbnail, setThumbnail] = useState("");
   
    useEffect(() => {
        if (selectedThumbnailImage) {
          const thumbnailObjectUrl = URL.createObjectURL(selectedThumbnailImage);
          setThumbnail(thumbnailObjectUrl);
          return () => URL.revokeObjectURL(thumbnailObjectUrl);
        }
      }, [selectedThumbnailImage]);

    const onSelectThumbnailImage = (e) => {
        if (!e.target.files || e.target.files.length === 0) {
          setSelectedThumbnailImage(undefined);
          return;
        }
    
        // I've kept this example simple by using the first image instead of multiple
        setSelectedThumbnailImage(e.target.files[0]);
      };
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("thumbnail", e.target["testImage"].files[0])
        data.append("name", e.target["testName"].value)
        console.log(data.get("thumbnail"));

        const respose = await fetch("http://localhost:8000/api/v1/test",{
          method:"POST",
          mode: "cors",
          body: data
        })
        
    }


    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Group>
                <Form.Control type="file" accept="image/*" name="testImage" onChange={(e)=>onSelectThumbnailImage(e)}>
                </Form.Control>
            </Form.Group>
            <Image src={thumbnail} width={400} height={300}/>
            <Form.Control type="text" name="testName"></Form.Control>
            
            <Button type="submit"> Image Upload</Button>
        </Form>
    )
}