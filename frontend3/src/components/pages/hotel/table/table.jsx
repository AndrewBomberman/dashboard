import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import columns from "./tableColumns"
import { useLoaderData } from "react-router-dom";

export default function HotelsTable() {
  const hotels =  useLoaderData()
  console.log(hotels)
  
  return (
    <Box sx={{ height: 400, width: 1000 }}>
      <DataGrid
        rowHeight={200}
        rows={hotels}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        getRowId={(row) => row._id}
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
