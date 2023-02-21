import { useQuery, useMutation, useQueryClient } from "react-query";
import { useDeleteRoomRequest, useGetRoomsRequest } from "..../requests/roomRequests
export const useDeleteHotelQuery = () => {
  const client = useQueryClient();

  return useMutation(async (id) => await useDeleteRoomRequest(id), {
    onMutate: async (id) => {
      await client.cancelQueries("rooms");
      const prevData = client.getQueryData("rooms");
      client.setQueryData("rooms", (prevData) => {
        return prevData.filter((room) => room._id !== id);
      });
      return prevData;
    },
    onError: (_e, _hero, context) => {
      console.log(context);
    },
    onSettled: () => {
      client.invalidateQueries("rooms");
    },
  });
};

export const useGetRoomsQuery = () => {
  return useQuery("rooms", async () => await useGetRoomsRequest());
};

