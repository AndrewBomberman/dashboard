import { useQuery, useMutation, useQueryClient } from "react-query";
import { useDeleteHotelRequest, useGetHotelsRequest } from "../requests/hotelRequests";
export const useDeleteHotelQuery = () => {
  const client = useQueryClient();

  return useMutation(async (id) => await useDeleteHotelRequest(id), {
    onMutate: async (id) => {
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
  });
};




export const useGetHotelsQuery = () => {
  return useQuery("hotels", async () => await useGetHotelsRequest(),{
    refetchOnWindowFocus:false
  });
};

