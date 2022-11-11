import { useParams } from "react-router-dom";
import { useGetHotel } from "../../api/controllers/HotelController/useGetHotel";
import EditHotel from "../forms/edit/EditHotel";
import { Spinner } from "react-bootstrap";

export default function HotelPage() {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetHotel(id);


  while (isLoading || isFetching) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }


  return (
    <div className="HotelPage">
      <EditHotel hotel={data} />
    </div>
  );
}
