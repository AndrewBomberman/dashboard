import { useParams } from "react-router-dom";

import useGetHotel from "../../../api/hotelController/useGetHotel";
import { Spinner } from "react-bootstrap";

export default function HotelPage() {
  const { id } = useParams();
  const { data: hotel, isLoading, isFetching } = useGetHotel(id);

  while (isLoading || isFetching) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  
  
}
