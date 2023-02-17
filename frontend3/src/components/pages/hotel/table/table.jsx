import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import columns from "./tableColumns";
import { useLoaderData } from "react-router-dom";

export default function HotelsTable() {
  const hotels = useLoaderData();
  console.log(hotels);

  return (
    <Box sx={{ height: 400, width: 1700 }}>
      <DataGrid
        rowHeight={100}
        rows={hotels}
        columns={columns}
        rowSpacingType="border"
        pageSize={5}
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
