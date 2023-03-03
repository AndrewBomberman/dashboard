import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import columns from "../../pages/hotel/table/tableColumns

export default function Table({mode, data}) {
  return (
    <Box sx={{ height: 400, width: 1375,}}>
      <DataGrid
        rowHeight={100}
        rows={data}
        columns={mode ==="hotel" ? columns :[]}
        rowSpacingType="border"
        pageSize={10}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        autoHeight
        autoPageSize
        getRowId={(row) => row._id}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
