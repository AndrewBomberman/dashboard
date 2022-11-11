import { useQuery, useMutation, useQueryClient } from "react-query";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const useDeleteHotel = () => {
  const [cookies, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();
  const client = useQueryClient();
  return useMutation(
    async (id) => {
      if (cookies.auth) {
        const response = await fetch(
          "http://localhost:8000/api/v1/hotels?_id=" + id,
          {
            method: "DELETE",
            mode: "cors",
            headers: {
              "Content-Type": "application/json",
              "Authorization": "Bearer " + cookies.auth,
            },
          }
        );
        console.log(response);
        if (response.status !== 200) {
          removeCookie("auth");
          navigate("/login");
        }
        return await response.json();
      } else {
        navigate("/login");
      }
    },
    {
      onMutate: async (id) => {
        console.log("Hotel Id");
        console.log(id);
        await client.cancelQueries("hotels");
        const prevData = client.getQueryData("hotels");
        client.setQueryData("hotels", (prevData) => {
          return prevData.filter((hotel) => hotel._id !== id);
        });
        return prevData;
      },
      onError: (_e, _hero, context) => {
        console.log(context);
      },
      onSettled: () => {
        client.invalidateQueries("hotels");
      },
    }
  );
};
