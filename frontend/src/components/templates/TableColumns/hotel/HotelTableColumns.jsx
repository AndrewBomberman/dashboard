import { getThumbnail, getName, getDisplay, getBookings, getRating, getEdit, getDelete, getRooms } from "./HotelTableColumnFunctions";
export default [
  {
    field: "thumbnail",
    headerName: "Thumbnail",
    width: 500,
    sortable: false,
    filterable: false,
    renderCell: getThumbnail,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    minWidth: 200,
    maxWidth: 300,
    sortable:true,
    valueGetter: getName,
  },
  {
    field: "display",
    headerName: "Display",
    width:200,
    minWidth: 200,
    maxWidth: 250,
    sortable:false,
    filterable:false,
    renderCell: getDisplay,
  },

  {
    field: "bookings",
    headerName: "Bookings",
    width: 150,
    minWidth: 150,
    maxWidth: 200,
    renderValue:getBookings
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 200,
    minWidth: 200,
    maxWidth: 250,
    renderCell:getRating
  },

  {
    field: "edit",
    headerName: "Edit",
    width: 100,
    minWidth: 100,
    maxWidth: 150,
    sortable:false,
    filterable: false ,
    renderCell:getEdit,
  },
  {
    field: "delete",
    headerName:"Delete",
    width: 100,
    minWidth: 100,
    maxWidth: 150,
    sortable:false,
    filterable: false ,
    renderCell:getDelete
  },
];
