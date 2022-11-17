import { useQuery, useMutation, useQueryClient } from "react-query";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const useAddRoom = () => {
    const [cookies, setCookies, removeCookie] = useCookies();
    const navigate = useNavigate();
    const client = useQueryClient();
    return (
      useMutation( async (room) => {
        const response = await fetch("http://localhost:8000/api/v1/rooms", {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookies.auth,
          },
          body: JSON.stringify(room),
        });
        console.log(response)
        if (response.status!==200) {
          removeCookie("auth");
          navigate("/login");
        }
        return await response.json();
      }),
      {
        onMutate: async (room) => {
          console.log("room");
          console.log(room);
          await client.cancelQueries("rooms");
          const prevData = client.getQueryData("rooms");
          console.log(prevData);
          client.setQueryData("rooms", (prevData) => {
            return {
              ...prevData,
              data: [...prevData.data, room],
            };
          });
          return prevData;
        },
        onError: (_e, _hero, context) => {
          console.log(context);
        },
        onSettled: () => {
          client.invalidateQueries("rooms");
        },
      }
    );
  }