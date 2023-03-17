import { useQuery, useMutation, useQueryClient } from "react-query";
import { useGetRoomsRequest, useDeleteRoomRequest } from "../requests/roomRequests"
export const useDeleteRoomQuery = () => {
  const client = useQueryClient();

  return useMutation(async (id) => await useDeleteRoomRequest(id), {
    onMutate: async (id) => {
     console.log(id)
    },
    onError: (_e, _hero, context) => {
      console.log(context);
    },
    onSettled: () => {
      client.invalidateQueries("rooms");
    },
  });
};

export const useGetRoomsQuery = (hotel_id) => {
  return useQuery(["rooms", hotel_id], async () => await useGetRoomsRequest(hotel_id),{
    refetchOnWindowFocus:true
  });
};
export const useGetRoomQuery = (id) => {
  return useQuery(["rooms",id], async () => await useGetRoomsRequest(id),{
    refetchOnWindowFocus:false
  });
};
