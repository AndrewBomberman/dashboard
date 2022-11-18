import { useQuery } from "react-query";
import getHotels from "../requests/hotelRequests/getHotels";

const useGetHotels = () => {
  return useQuery(
    "hotels", async () => await getHotels(),{
      select: (data) => {
        console.log(data)
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
              };
            })
          );
        }
        return [];
      },
    }
  );
};
export default useGetHotels;