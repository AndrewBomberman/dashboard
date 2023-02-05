import { useGetHotels } from "../../../api/hotelController/useGetHotels";
import { Spinner, Container, Row, Col, Stack } from "react-bootstrap";
import HotelsTable from "../../tables/hotel/hotelsTable";


export default function HotelPage() {

  const { data:hotels, isLoading, isFetching } = useGetHotels();
  while (isLoading || isFetching) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <div className="HotelsPage">
      <Container>
        <Stack gap={3}>
          <Row>
            <Col lg={10} md={8} offset={2}>
              <HotelsTable hotels={hotels} />
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
}
