import { addService, getService } from "../../../services/generalServices";
import { useQueryClient, useMutation } from "react-query"
const useAddHotelQuery =  () => {
  const client = useQueryClient();

  return useMutation(async (room) => await addService(room, "rooms"), {
    onMutate: async (room) => {
      return await getService("rooms",{hotel_id:room.get("hotel_id")});
    },
    onError: (_e, _hero, context) => {
      console.log(context);
    },
    onSettled: () => {
      client.invalidateQueries("hotels");
    },
  });
}
export default useAddHotelQuery;
