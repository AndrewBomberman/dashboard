import Hotel from "../models/Hotel";
import { Table, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { filterHotels, validateKey } from "./HotelsTableHandels";
import SearchHotel from "../forms/search/SearchHotel"
import { useNavigate } from "react-router-dom";

export default function HotelsTable({ hotels }) {
  const [query, setQuery] = useState({ name: "" });
  const [sortBy, setSortBy] = useState("rating");
  const [orderBy, setOrderBy] = useState("desc");
  const navigate = useNavigate()
  const [filteredHotels, setFilteredHotels] = useState(
    filterHotels(hotels, query, sortBy, orderBy)
  );

  useEffect(() => {
    setFilteredHotels(filterHotels(hotels, query, sortBy, orderBy));
  }, [query, sortBy, orderBy]);

  const keys = ["thumbnail", "name" , "bookings" ,"rating"]
  console.log(hotels)

  return (
    <div className="HotelTable">
      {hotels &&<Row>
        <SearchHotel
          bookings={[...new Map(hotels.map((h) => [h.bookings, h])).values()]}
          ratings={[...new Map(hotels.map((h) => [h.rating.$numberDecimal, h])).values()]}
          query={query}
          onQueryChange={(newFilter) => {
            setQuery(newFilter);
          }}
        />
      </Row>}
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
              <tr>
                {keys.map((key) => {
                  return validateKey(
                    key,
                    sortBy,
                    orderBy,
                    setSortBy,
                    setOrderBy
                  );
                })}
                <th>
                  <div className="d-flex align-items-start">
                    <p className="p-2">Displayed</p>
                  </div>
                </th>
                <th colSpan={2}>
                  <Button type="button" className="btn w-100" onClick={()=>{navigate("/hotels/add")}}>
                    Add Hotel
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {hotels && filteredHotels.length>0 && filteredHotels.map((hotel) => {
                return <Hotel key={hotel._id} hotel={hotel} />;
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}
