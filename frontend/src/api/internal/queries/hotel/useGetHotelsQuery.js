import { getAllService } from "../../../services/generalServices"
import { useQuery } from "react-query"
const useGetHotelsQuery = () => {
    return useQuery("hotels", async () => await getAllService("hotels"),{ refetchOnWindowFocus:false});
};
export default useGetHotelsQuery  