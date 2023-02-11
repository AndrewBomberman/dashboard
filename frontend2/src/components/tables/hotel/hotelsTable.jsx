import HotelsTableHeader from "./hotelsTableHeader";
import hotelsTableFilter from "./hotelsTableFilter";
import { Table, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import HotelsTableRow from "./hotelsTableRow";
export default function HotelsTable({ hotels }) {
  const [query, setQuery] = useState({ name: "" });
  const [sortBy, setSortBy] = useState("rating");
  const [orderBy, setOrderBy] = useState("desc");
  const [filteredHotels, setFilteredHotels] = useState(
    hotelsTableFilter(hotels, query, sortBy, orderBy)
  );

  useEffect(() => {
    setFilteredHotels(hotelsTableFilter(hotels, query, sortBy, orderBy));
  }, [query, sortBy, orderBy]);

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
            <thead>
              <HotelsTableHeader
                hotels={filteredHotels}
                crtSort={sortBy}
                crtOrder={orderBy}
                changeSort={setSortBy}
                changeOrder={setOrderBy}
                
              />
            </thead>

            <tbody>
              {filteredHotels.map(hotel=>{
                return (<tr key={hotel._id}><HotelsTableRow hotel={hotel}/></tr>)
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}
