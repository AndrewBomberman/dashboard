import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import hotelColumns from "./TableColumns/hotel/HotelTableColumns";
import roomColumns from "./TableColumns/room/RoomTableColumns";
import bookingColumns  from "./TableColumns/booking/BookingTableColumns";


const TableColumns = (mode) =>{
  switch(mode){
      case "hotels":{
          return hotelColumns
      }
      case "rooms":{
          return roomColumns;
      }
      case "bookings":{
          return bookingColumns;
      }
      default: hotelColumns
  }
}

export default function TableTemplate({ mode, data }) {
  return (
    <DataGrid
    sx={{ marginTop: 5}}
      rows={data}
      rowSpacingType="border"
      columns={TableColumns(mode)}
      getRowId={(row) => row._id}
      disableRowSelectionOnClick
      autoHeight
      autoWidth
      rowHeight={300}
      experimentalFeatures={{ newEditingApi: true }}
      components={{
        Toolbar: GridToolbar,
      }}
    />
  );
}
