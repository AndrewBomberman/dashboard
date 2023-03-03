import { useQuery, useMutation, useQueryClient } from "react-query";
import { useDeleteHotelRequest, useGetHotelsRequest, useEditHotelRequest, useGetHotelRequest, useAddHotelRequest } from "../requests/hotelRequests";
export const useDeleteHotelQuery = () => {
  const client = useQueryClient();

  return useMutation(async (id) => await useDeleteHotelRequest(id), {
    onMutate: async (id) => {
      await client.cancelQueries("hotels");
      const prevData = client.getQueryData("hotels");
      client.setQueryData("hotels", (prevData) => {
        return prevData.filter((hotel) => hotel._id !== id);
      });
      return prevData;
    },
    onError: (_e, _hero, context) => {
      console.log(context);
    },
    onSettled: () => {
      client.invalidateQueries("hotels");
    },
  });
};


export const useEditHotelQuery = () => {
  const client = useQueryClient();

  return useMutation(async (hotel) => await useEditHotelRequest(hotel), {
    
    onMutate: async (hotel) => {
      await client.cancelQueries(["hotel", hotel._id]);
      const prevData = client.getQueryData(["hotel", hotel._id]);
      console.log("Prev Data")
      client.setQueryData(["hotel",hotel._id], (prevData) => {
        prevData.name = "test"
        return prevData
      });
      return prevData
      
    },
    onError: (_e, _hero, context) => {
      console.log(context);
    },
    onSettled: () => {
      client.invalidateQueries("hotels");
    },
  });
};
export const useAddHotelQuery = () => {
  const client = useQueryClient();

  return useMutation(async (hotel) => await useAddHotelRequest(hotel), {
    
    onMutate: async (hotel) => {
      await client.cancelQueries("hotels");
      const prevData = client.getQueryData("hotel");
      console.log("Prev Data")
      client.setQueryData("hotels", (prevData) => {
        return [...prevData, hotel]
      });
      return prevData;

      
    },
    onError: (_e, _hero, context) => {
      console.log(context);
    },
    onSettled: () => {
      client.invalidateQueries("hotels");
    },
  });
};



export const useGetHotelsQuery = () => {
  return useQuery("hotels", async () => await useGetHotelsRequest(),{
    refetchOnWindowFocus:false
  });
};
export const useGetHotelQuery = (id) => {
  return useQuery(["hotel", id], async () => await useGetHotelRequest(id),{
    refetchOnWindowFocus:false
  })
};

