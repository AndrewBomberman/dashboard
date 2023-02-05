import HotelsTableHeader from "./hotelsTableHeader";
import { Table, Row, Col } from "react-bootstrap";
export default function HotelsTable({ hotels }) {
  return (
    <div className="HotelsTable">
      <Row>
        <Col>
          <Table
            responsive
            striped
            bordered
            hover
            variant="secondary"
            className="text-dark"
          >
            <HotelsTableHeader />
          </Table>
        </Col>
      </Row>
    </div>
  );
}
