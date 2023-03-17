import deleteHotelRequest from "../../requests/hotel/deleteHotelRequest";
import { useQueryClient, useMutation } from "react-query"
const useDeleteHotelQuery =  () => {
  const client = useQueryClient();

  return useMutation(async (id) => await deleteHotelRequest(id), {
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
export default useDeleteHotelQuery
