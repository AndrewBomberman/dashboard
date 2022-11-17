import Room from "../models/Room";
import { Table, Row, Col, Button, Badge } from "react-bootstrap";
import { useEffect, useReducer, useState } from "react";
import { filterRooms, validateKey } from "./roomsTableHandels";
import Searchroom from "../forms/search/Searchroom"

export default function RoomsTable({ rooms }) {
  const [query, setQuery] = useState({ name: "" });
  const [sortBy, setSortBy] = useState("rating");
  const [orderBy, setOrderBy] = useState("desc");
  const [filteredRooms, setFilteredRooms] = useState(
    filterRooms(rooms, query, sortBy, orderBy)
  );

  useEffect(() => {
    setFilteredRooms(filterRooms(rooms, query, sortBy, orderBy));
  }, [query, sortBy, orderBy]);

  const keys = ["name" , "bookings" ,"rating"]

  return (
    <div className="roomTable">
      {rooms &&<Row>
        <SearchRoom
          bookings={[...new Map(rooms.map((h) => [h.bookings, h])).values()]}
          ratings={[...new Map(rooms.map((h) => [h.rating.$numberDecimal, h])).values()]}
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
                  <Button type="button" className="btn w-100">
                    Add room
                  </Button>
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredRooms.length>0 && filteredRooms.map((room) => {
                return <room key={room._id} room={room} />;
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
}
