import { useQuery, useMutation, useQueryClient } from "react-query";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const useGetHotels = () => {
    const [cookies, setCookies, removeCookie] = useCookies();
    const navigate = useNavigate();
    return useQuery("hotels", async () => {
        const response = await fetch("http://localhost:8000/api/v1/hotels", {
          headers: {
            "Authorization": "Bearer " + cookies.auth,
          },
        });
        console.log(response)
        if (response.status!==200) {
          removeCookie("auth");
          navigate("/login");
        }
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
                };
              })
            );
          }
          return [];
        },
      }
    );
  };