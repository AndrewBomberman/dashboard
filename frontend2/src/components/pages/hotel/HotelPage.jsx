import { useParams } from "react-router-dom";
import useGetHotel from "../../../api/controllers/hotelController/useGetHotel";
import { Spinner, Row, Col } from "react-bootstrap";
import EditHotel from "../../forms/hotel/edit";

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
  console.log(hotel)

  return (
    <div className="HotelPage">
      <Row>
        <Col md={10} lg={12}>
          <EditHotel hotel={hotel}/>
        </Col>
      </Row>
      <Row>
        <Col md={10} lg={12}>
          Hotel Rooms
        </Col>
      </Row>
    </div>
  )
  
  
}
