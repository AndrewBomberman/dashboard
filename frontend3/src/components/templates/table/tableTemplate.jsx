import { DataGrid } from "@mui/x-data-grid";
import hotelColumns from "../../templates/hotel/tableColumns";
import roomColumns from "../../templates/room/tableColums";
import { Card, CardContent, CardHeader } from "@mui/material";

export default function TableTemplate({ mode, data }) {
  return (
    <Card>
      <CardHeader title={"Hotels"}/>
      <CardContent>
        <DataGrid
          sx={{ width: "fit-content 100%", height: "100%" }}
          rowHeight={100}
          rows={data}
          columns={mode === "hotel" ? hotelColumns : roomColumns}
          rowSpacingType="border"
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          autoHeight
          autoPageSize
          getRowId={(row) => row._id}
          density="comfortable"
          experimentalFeatures={{ newEditingApi: true }}
        />
      </CardContent>
    </Card>
  );
}
