import useGetHotelsQuery from "../../../api/internal/queries/hotel/useGetHotelsQuery";
import {
  CircularProgress,
  Button,
  Stack,
  Modal,
  Box,
  Typography,
  Card,
  CardHeader,
  CardContent,

} from "@mui/material";
import TableTemplate from "../../templates/TableTemplate";
export default function HotelsPage() {
  const { data: hotels, isLoading, isFetching } = useGetHotelsQuery();
  while (isFetching || isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="HotelsPage" style={{ display: "flex" }}>
        <TableTemplate data={hotels} mode={"hotel"}/>
    </div>
  );
}
