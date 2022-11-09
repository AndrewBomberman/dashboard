import { useQuery, useMutation, useQueryClient } from "react-query";
import { getCategories } from "../repositories/RoomRepository";

export const useGetRooms = () => {
  return useQuery("rooms", async () => await getRooms());
};
