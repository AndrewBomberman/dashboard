import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import columns from "./tableColumns";
import { useGetHotelsQuery } from "../../../../api/hotel/query/hotelQueries";

export default function HotelsTable() {
  const { data:hotels, isLoading, isFetching} = useGetHotelsQuery();
  while( isLoading || isFetching ) {
    return <CircularProgress />
  }

  return (
    <Box sx={{ height: 400, width: 1400 }}>
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
