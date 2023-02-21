import { DataGrid } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import CircularProgress from '@mui/material/CircularProgress';
import columns from "./tableColumns";
import { useGetRoomsQuery } from "../../../../api/query/roomQueries";

export default function roomsTable() {
  const { data:rooms, isLoading, isFetching} = useGetRoomsQuery();
  while( isLoading || isFetching ) {
    return <CircularProgress />
  }

  return (
    <Box sx={{ height: 400, width: 1400 }}>
      <DataGrid
        rowHeight={100}
        rows={rooms}
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
