import { useMutation, useQueryClient } from "react-query";

const useDeleteHotel = () => {
  const client = useQueryClient();

  return useMutation(
    async (id) => {
      await fetch("http://localhost:8000/api/v1/hotels?_id=" + id, {
        method: "DELETE",
        mode: "cors",
      });
    },
    {
      onMutate: async (id) => {
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
    }
  );
};
export default useDeleteHotel