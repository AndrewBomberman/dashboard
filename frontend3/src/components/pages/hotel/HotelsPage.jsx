import { useGetHotelsQuery } from "../../../api/internal/hotel/query/hotelQueries";
import { CircularProgress } from "@mui/material";
import TableTemplate from "../../templates/table/tableTemplate";
export default function HotelsPage() {
  const { data, isLoading, isFetching } = useGetHotelsQuery();
  while (isLoading || isFetching) {
    return <CircularProgress />;
  }
  console.log(data);

  return (
    <div className="HotelsPage">
     <TableTemplate mode={"hotel"} data={data} />
    </div>
  );
}
