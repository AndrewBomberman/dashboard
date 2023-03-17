import useGetHotelsQuery from "../../../api/internal/queries/hotel/useGetHotelsQuery";
import { CircularProgress, Card, CardContent, CardHeader } from "@mui/material";
import TableTemplate from "../../templates/TableTemplate";
export default function HotelsPage() {
  const { data: hotels, isLoading, isFetching } = useGetHotelsQuery();
  while (isFetching || isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="HotelsPage" style={{ display:"flex"}}>
       <TableTemplate mode="hotel" data={hotels} />
    </div>
  );
}
