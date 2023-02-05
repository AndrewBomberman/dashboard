import HotelsTableHeader from "./hotelsTableHeader";
import hotelsTableFilter from "./hotelsTableFilter";
import { Table, Row, Col } from "react-bootstrap";
import { useState } from "react";
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
