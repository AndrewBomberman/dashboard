import { useQuery } from "react-query"
import { getService } from "../../../services/generalServices";
const useGetRoomsQuery = (query={}) => {
    return useQuery("hotel_rooms", async () => await getService("rooms", query),{
        refetchOnWindowFocus:false
    });
};
export default useGetRoomsQuery
  