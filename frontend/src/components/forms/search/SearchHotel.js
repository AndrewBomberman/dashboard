import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { GrRefresh } from "react-icons/gr";
import { BookingsSorter, NameSorter, RatingSorter} from "./SearchHotelComponents"

export default function SearchHotel({ bookings, ratings, onQueryChange }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onQueryChange({});
    e.target.reset();
  };
  return (
    <div className="SearchHotel">
      <Form className="d-flex p-2" onSubmit={handleSubmit}>
        <NameSorter selector={query=>onQueryChange(query)}/>
        <BookingsSorter bookings={bookings} selector={query=>onQueryChange(query)}/>
        <RatingSorter ratings={ratings} selector={query=>onQueryChange(query)}/>
          <Button type="submit" variant="primary"><GrRefresh/></Button>
      </Form>
    </div>
  );
}
