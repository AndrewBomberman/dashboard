import { useQuery } from "react-query";


export const useGetHotel = (id) => {
  

  return useQuery(["hotels", id], async () => {
    
    const response = await fetch(
      "http://localhost:8000/api/v1/hotels?_id=" + id,

    );
    return await response.json()
  },{
    refetchOnWindowFocus:false
  });
};
