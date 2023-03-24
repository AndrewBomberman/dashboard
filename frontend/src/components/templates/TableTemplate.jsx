import { DataGrid } from "@mui/x-data-grid";
import hotelColumns from "../pages/hotel/HotelTableColumns";
import roomColumns from "../pages/room/RoomTableColumns";
export default function TableTemplate({ mode, data }) {
  return (
    <DataGrid
      rows={data}
      rowSpacingType="border"
      columns={mode === "hotels" ? hotelColumns : roomColumns}
      getRowId={(row) => row._id}
      disableRowSelectionOnClick
      autoHeight
      autoWidth
      rowHeight={300}
      experimentalFeatures={{ newEditingApi: true }}
    />
  );
}
