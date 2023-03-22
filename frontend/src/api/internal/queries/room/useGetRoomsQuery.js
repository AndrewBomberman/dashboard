import { useQuery } from "react-query"
import { getService } from "../../../services/generalServices";
export const useGetRoomsQuery = (query={}) => {
    return useQuery("hotel_rooms", async () => await getService("rooms", query),{
        refetchOnWindowFocus:false
    });
};
  