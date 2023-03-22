import { getService } from "../../../services/generalServices"
import { useQuery } from "react-query"
const useGetHotelsQuery = (query={}) => {
    return useQuery("hotels", async () => await getService("hotels", query),{ refetchOnWindowFocus:false});
};
export default useGetHotelsQuery  