import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
export const RatingSorter = ({ ratings, selector }) => {
  return (
    <Dropdown className="me-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Rating
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {ratings.map((rating) => {
          return (
            <Dropdown.Item
              key={rating._id}
              name={rating.rating.$numberDecimal}
              onClick={(e) => {
                selector({ rating: e.target.name });
              }}
            >
              {rating.rating.$numberDecimal}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export const BookingsSorter = ({ bookings, selector }) => {
  return (
    <Dropdown className="me-2">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Bookings
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {bookings.map((booking) => {
          return (
            <Dropdown.Item
              key={booking._id}
              name={booking.bookings}
              onClick={(e) => {
                selector({ bookings: e.target.name });
              }}
            >
              {booking.bookings}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};
export const NameSorter = ({selector}) => {
  return (
    <Form.Control
      type="search"
      placeholder="Name"
      className="me-2 "
      aria-label="Search by name..."
      name="name"
      onChange={(e) => {
        selector({ name: e.target.value });
      }}
    ></Form.Control>
  );
};
