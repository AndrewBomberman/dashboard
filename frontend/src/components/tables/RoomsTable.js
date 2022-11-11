import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

export default function RoomsTable() {
  return (
    <div className="RoomsTable">
      <Row>
        <Col>
          <Table
            responsive
            striped
            bordered
            hover
            variant="dark"
            className="text-white"
          >
            <thead>
              <tr>
                <th>
                  <div className="d-flex align-items-start">
                    <p>Name</p>
                  </div>
                </th>
                <th>
                  <div className="d-flex align-items-start">
                    <p>Rating</p>
                  </div>
                </th>
                <th>
                  <div className="d-flex align-items-start">
                    <p>Bookings</p>
                  </div>
                </th>
                <th>
                  <div className="d-flex align-items-start">
                    <p>Available</p>
                  </div>
                </th>
                <th colSpan={2}>
                  <Button type="button" className="btn w-100">
                    Add Room
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody></tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}
