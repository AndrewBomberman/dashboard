import { deleteService } from "../../../services/generalServices";
import { useQueryClient, useMutation } from "react-query"
const useDeleteRoomQuery = () => {
  const client = useQueryClient();

  return useMutation(async (id) => await  deleteService(id , "rooms"), {
    onMutate: async (id) => {
      await client.cancelQueries("hotel_rooms");
      const prevData = client.getQueryData("hotel_rooms");
      client.setQueryData("hotel_rooms", (prevData) => {
        return prevData.filter((room) => room._id !== id);
      });
      return prevData;
    },
    onError: (_e, _hero, context) => {
      console.log(context);
    },
    onSettled: () => {
      client.invalidateQueries("hotel_rooms");
    },
  });
};
export default useDeleteRoomQuery
