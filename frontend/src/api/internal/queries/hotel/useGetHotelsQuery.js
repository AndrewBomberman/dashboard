import useGetHotelsRequest from "../../requests/hotel/getHotelsRequest"
import { useQuery } from "react-query"
const useGetHotelsQuery = () => {
    return useQuery("hotels", async () => await useGetHotelsRequest(),{ refetchOnWindowFocus:false});
};
export default useGetHotelsQuery  