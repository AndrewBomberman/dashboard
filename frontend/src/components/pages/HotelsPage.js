import HotelsTable from "../tables/HotelsTable";
import { useGetHotels } from "../../api/controllers/HotelController/useGetHotels";
import { Stack, Spinner, Container, Row, Col, Badge } from "react-bootstrap";

export default function HotelsPage() {
  const { data, isLoading, isFetching } = useGetHotels();
  


  while (isLoading || isFetching) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  console.log(data)
  

  return (
    <div className="HotelsPage">
      <Container>
        <Stack gap={3}>
          <Row>
            <Col lg={10} md={8} offset={2}>
              <HotelsTable hotels={data} />
            </Col>
          </Row>
        </Stack>
      </Container>
    </div>
  );
}
