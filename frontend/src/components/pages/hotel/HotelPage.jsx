import { useLoaderData } from "react-router-dom";
import HotelEditFormFields from "../../templates/EditFormFields/hotel/HotelEditFormFields";
import { useGetRoomsQuery } from "../../../api/internal/queries/room/useGetRoomsQuery";
import { CircularProgress } from "@mui/material";


export default function HotelPage() {
  const data = useLoaderData();
  const { data:rooms , isFetching, isLoading } = useGetRoomsQuery({hotel_id:data[0]._id})
  while (!data || isFetching || isLoading) {
    return <CircularProgress />;
  }

  
  return (
    <div className="HotelPage">
      {data[0] && <HotelEditFormFields hotel={data[0]} rooms={rooms}/>}
      
    </div>
  );
}
