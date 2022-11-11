import { useQuery, useMutation, useQueryClient } from "react-query";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const useGetHotel = (id) => {
    const [cookies, setCookies, removeCookie] = useCookies();
    const navigate = useNavigate();
    
    return useQuery(["hotels", id], async () => {
        const response = await fetch(
          "http://localhost:8000/api/v1/hotels?_id=" + id, {
            headers: {
              "Authorization": "Bearer " + cookies.auth,
            },
          }
        );
        console.log(response)
        if (response.status!==200) {
          removeCookie("auth");
          navigate("/login");
        }
        const hotel = await response.json();
        return hotel[0];
      },
      {
        refetchOnWindowFocus: false,
      }
    );
  };