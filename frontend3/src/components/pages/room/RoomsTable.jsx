import TableTemplate from "../../templates/table/tableTemplate";
import { useGetRoomsQuery } from "../../../api/internal/room/query/roomQueries";
import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CircularProgress } from "@mui/material";

export default function RoomsTable() {
  const { id } = useParams();
  const { data: rooms, isFetching, isLoading } = useGetRoomsQuery(id);
  while (isLoading || isFetching) {
    return <CircularProgress />;
  }
  console.log(rooms);

  return (
    <div className="RoomsPage">
      <Card>
        <CardHeader title="Rooms" sx={{textAlign:"center"}}/>
        <CardContent>
          <TableTemplate mode={"room"} data={rooms} />
        </CardContent>
      </Card>
    </div>
  );
}
