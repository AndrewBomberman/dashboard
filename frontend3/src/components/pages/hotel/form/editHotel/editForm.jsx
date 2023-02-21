import { useParams } from "react-router-dom";
import { useGetHotelsQuery } from "../../../../../api/hotel/query/hotelQueries";
import CircularProgress from "@mui/material/CircularProgress";

export default function EditHotelForm() {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetHotelsQuery();
  while (isLoading || isFetching) {
    return <CircularProgress />;
  }
  console.log(data.find(hotel=>hotel._id === id))

  
  return <div className="EditHotelForm"></div>;
}
