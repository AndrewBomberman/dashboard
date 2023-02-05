import { Button } from "react-bootstrap";
import { BiSortAlt2 } from "react-icons/bi";

export const filterHotels = (data, query, sortBy, orderBy) => {
  if(data){
    return data
    .filter((hotel) => {
      if (query.name) {
        return hotel.name.toLowerCase().includes(query.name.toLowerCase());
      }
      if (query.rating) {
        return (
          parseFloat(hotel.rating.$numberDecimal) === parseFloat(query.rating)
        );
      }
      if (query.bookings) {
        return parseInt(hotel.bookings) === parseInt(query.bookings);
      }
      return hotel;
    })
    .sort((a, b) => {
      const order = orderBy === "asc" ? 1 : -1;
      if (sortBy === "name") {
        return a.name.toLowerCase() < b.name.toLowerCase()
          ? -1 * order
          : 1 * order;
      }
      if (sortBy === "bookings") {
        return parseInt(a.bookings) < parseInt(b.bookings)
          ? -1 * order
          : 1 * order;
      }
      if (sortBy === "rating") {
        return parseFloat(a.rating) < parseFloat(b.rating)
          ? -1 * order
          : 1 * order;
      }
      return 0;
    });
  }
  return [];
};

export const validateKey = (
  key,
  crtSort,
  crtOrder,
  changeSort,
  changeOrder
) => {
  if (key === "name" || key === "bookings" || key === "rating" || key === "thumbnail") {
    return (
      <th key={key}>
        <div className="d-flex align-items-start">
          <p className="p-2">{key[0].toUpperCase()+key.slice(1)}</p>
          <Button
            className="btn btn-dark"
            onClick={() => {
              if (key !== crtSort) {
                changeSort(key);
                changeOrder("desc");
              } else {
                if (crtOrder === "asc") {
                  changeOrder("desc");
                } else if (crtOrder === "desc") {
                  changeOrder("asc");
                }
              }
            }}
          >
            <BiSortAlt2 />
          </Button>
        </div>
      </th>
    );
  }
};


