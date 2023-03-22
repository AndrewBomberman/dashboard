import { DataGrid } from "@mui/x-data-grid";
import hotelColumns from "../pages/hotel/HotelTableColumns";
import roomColumns from "../pages/room/RoomTableColumns"
export default function TableTemplate({ mode, data }) {
  return (
    <DataGrid sx={{width:"100%"}}
        rows={data}
        rowSpacingType="border"
        columns={mode === "hotel" ? hotelColumns :  roomColumns}
        getRowId={(row) => row._id}
        disableRowSelectionOnClick
        autoHeight
        autoWidth
        experimentalFeatures={{ newEditingApi: true }}
      />
  );
}
