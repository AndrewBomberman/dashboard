import { useQuery, useMutation, useQueryClient } from "react-query";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const useAddHotel = () => {
  const client = useQueryClient();

  return (
    useMutation(async (hotel) => {
      const response = await fetch("http://localhost:8000/api/v1/hotels", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hotel),
      });
      return await response.json();
    }),
    {
      onMutate: async (hotel) => {
        console.log("Hotel");
        console.log(hotel);
        await client.cancelQueries("hotels");
        const prevData = client.getQueryData("hotels");
        console.log(prevData);
        client.setQueryData("hotels", (prevData) => {
          return {
            ...prevData,
            data: [...prevData.data, hotel],
          };
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