import { getService } from "../../../services/generalServices"
import { useQuery } from "react-query"
const useGetBookingsQuery = (query={}) => {
    return useQuery("bookings", async () => await getService("bookings/search", query),{ refetchOnWindowFocus:false});
};
export default useGetBookingsQuery  