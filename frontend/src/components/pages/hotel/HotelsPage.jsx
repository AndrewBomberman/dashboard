import useGetHotelsQuery from "../../../api/internal/queries/hotel/useGetHotelsQuery";
import useAddHotelQuery from "../../../api/internal/queries/hotel/useAddHotelQuery";
import { CircularProgress, FormControl, Stack } from "@mui/material";
import { Form } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import TableTemplate from "../../templates/TableTemplate";
export default function HotelsPage() {
  const { data: hotels, isLoading, isFetching } = useGetHotelsQuery();
  while (isFetching || isLoading) {
    return <CircularProgress />;
  }

  return (
    <div className="HotelsPage" style={{ display: "flex" }}>
      <TableTemplate data={hotels} mode={"hotels"} />
    </div>
  );
}
