import { useQuery } from "react-query"
export default useGetHotelsQuery = () => {
    return useQuery("rooms", async () => await useGetHotelsRequest());
};
  