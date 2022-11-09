import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getHotels,
  getHotel,
  addHotel,
  deleteHotel,
  editHotel,
} from "../repositories/HotelRepository";

export const useGetHotels = () => {
  return useQuery("hotels", async () => await getHotels(), {
    
    select: (data) => {
      if(data.length>0){
        return data && data.map((hotel) => {
          return {
            _id: hotel._id,
            name: hotel.name,
            bookings: hotel.bookings,
            rating: hotel.rating,
            display: hotel.display,
          };
        });
      }
      return []
    },
  });
};
export const useGetHotel = (id) => {
  return useQuery(["hotels", id], async () => await getHotel(id),{
    refetchOnWindowFocus:false
  });
};
export const useAddHotel = () => {
  const client = useQueryClient();
  return useMutation(addHotel, {
    onMutate: async (hotel) => {
      console.log("Hotel");
      console.log(hotel);
      await client.cancelQueries("hotels");
      const prevData = client.getQueryData("hotels");
      console.log(prevData);
      client.setQueryData("hotels", (prevData) => {
        return {
          ...prevData,
          data: [...prevData.data, hotel],
        };
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
export const useDeleteHotel = () => {
  const client = useQueryClient();
  return useMutation(deleteHotel, {
    onMutate: async (id) => {
      console.log("Hotel Id");
      console.log(id);
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
