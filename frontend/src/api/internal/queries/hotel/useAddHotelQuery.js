import { addService, getService } from "../../../services/generalServices";
import { useQueryClient, useMutation } from "react-query"
const useAddHotelQuery =  () => {
  const client = useQueryClient();

  return useMutation(async (hotel) => await addService(hotel, "hotels"), {
    onMutate: async () => {
      return await getService("hotels", {})
     
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
