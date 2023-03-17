import deleteHotelRequest from "../../requests/hotel/deleteHotelRequest";
import { useQueryClient } from "react-query"
const useDeleteHotelQuery = () => {
  const client = useQueryClient();

  return useMutation(async (id) => await deleteHotelRequest(id), {
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
      client.invalidateQueries("room");
    },
  });
};
export default useDeleteHotelQuery
