
import { useGetHotelsQuery } from "../../../api/internal/hotel/query/hotelQueries";
import { CircularProgress } from "@mui/material";
import TableTemplate from "../../templates/tableTemplate"

export default function HotelsPage() {
  const { data, isLoading, isFetching } = useGetHotelsQuery();
  while (isLoading || isFetching) {
    return <CircularProgress />;
  }

  return (
    <div className="HotelsPage">
     <TableTemplate mode={"hotel"} data={data}/>
    </div>
  );
}
