import useGetHotels from "../../../api/hotelController/useGetHotels";
import {
  Spinner,
  Container,
  Row,
  Col,
  Stack,
  Badge,
  Pagination,
} from "react-bootstrap";
import HotelsTable from "../../tables/hotel/hotelsTable";

export default function HotelPage() {
  const { data: hotels, isLoading, isFetching } = useGetHotels();
  while (isLoading || isFetching) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="HotelsPage">
      <Container>
        <Stack gap={4}>
          <Row>
            <Col lg={10} md={8} offset={2}>
              <h1>
                <Badge bg="dark">Hotels Table</Badge>
              </h1>
              <HotelsTable hotels={hotels} />
              <Pagination size="lg">{items}</Pagination>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={10}>
              <h1>
                <Badge bg="dark">Statistics</Badge>
              </h1>
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
}
