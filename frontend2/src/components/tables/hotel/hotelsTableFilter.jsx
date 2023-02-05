const hotelsTableFilter = (data, query, sortBy, orderBy) => {
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
export default hotelsTableFilter