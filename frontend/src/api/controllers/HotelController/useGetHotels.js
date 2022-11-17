import { useQuery, useMutation, useQueryClient } from "react-query";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const useGetHotels = () => {
  const navigate = useNavigate();
  const auth = Cookies.get("auth");

  return useQuery(
    "hotels",
    async () => {
      console.log(auth);
      if (!auth) {
        window.location.href = "http://localhost:3000/login";
      } else {
        const response = await fetch("http://localhost:8000/api/v1/hotels", {
          headers: {
            "Authorization": "Bearer " + auth,
          },
        });
        console.log(response);
        if (response.status === 200) {
          return await response.json();
        } else {
          navigate("/login");
        }
      }
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
