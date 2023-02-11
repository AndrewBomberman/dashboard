import { useQuery } from "react-query";

const useGetHotels = () => {
  return useQuery(
    "hotels",
    async () => {
      const response = await fetch("http://localhost:8000/api/v1/hotels", {});
      return await response.json();
    },
    {
      select: (data) => {
        if (data.length > 0) {
          return (
            data &&
            data.map((hotel) => {
              return {
                _id: hotel._id,
                name: hotel.name,
                bookings: hotel.bookings,
                rating: hotel.rating,
                display: hotel.display,
                thumbnail: hotel.thumbnail,
              };
            })
          );
        }
        return [];
      },
    }
  );
};
export default useGetHotels
