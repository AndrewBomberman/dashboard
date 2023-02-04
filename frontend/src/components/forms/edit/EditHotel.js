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
import { useState } from "react";

export default function EditHotel() {
 
  const { id } = useParams()
 


 
  
 
  

  const { data, isLoading, isFetching } = useGetHotel(id);

  while (isLoading || isFetching) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  console.log(data)

  

  

  return (
    <div className="EditHotelForm">
      <Image className="d-block" height={275} src={data.thumbnail} />
    </div>
  );
}
