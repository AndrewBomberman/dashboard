import { DataGrid } from "@mui/x-data-grid";
import hotelColumns from "../pages/hotel/HotelTableColumns";
import Box from "@mui/material/Box";
export default function TableTemplate({ mode, data }) {
  return (
    <DataGrid
        rows={data}
        rowSpacingType="border"
        columns={hotelColumns}
        getRowId={(row) => row._id}
        disableRowSelectionOnClick
        autoHeight
        autoWidth
        experimentalFeatures={{ newEditingApi: true }}
      />
  );
}
