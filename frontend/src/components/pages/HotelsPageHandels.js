export const bookings = (data) => {
  return data.map((hotel) => {
    return {
      id: hotel._id,
      bookings: hotel.bookings,
    };
  });
};
export const ratings = (data) => {
  return data.map((hotel) => {
    return { id: hotel._id, ratings: hotel.rating.$numberDecimal };
  });
};
