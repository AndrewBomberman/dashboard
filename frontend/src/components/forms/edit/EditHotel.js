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

import { BiImageAdd, BiSave } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { ImageGallery } from "../../ImageGallery";
import { useAddHotel } from "../../../api/controllers/HotelController/useAddHotel";
import { useParams } from "react-router-dom"
import { useGetHotel } from "../../../api/controllers/HotelController/useGetHotel"

export default function EditHotel({data}) {
 
  const { id } = useParams()

  console.log(data)
  

  

  

  

  return (
    <div className="EditHotelForm">
      <Image src={"http://localhost:8000/images/hotel/" + id + "/thumbnail"}></Image>
    </div>
  );
}
