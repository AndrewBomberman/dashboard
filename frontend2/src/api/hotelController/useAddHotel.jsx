import { useMutation, useQueryClient } from "react-query";

export const useAddHotel = () => {
  const client = useQueryClient();
  return useMutation(async (hotel) => {
    console.log(hotel)
    await fetch("http://localhost:8000/api/v1/hotels", {
      method: "POST",
      mode: "cors",
      body: hotel,
    });

  },
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
  })
};
