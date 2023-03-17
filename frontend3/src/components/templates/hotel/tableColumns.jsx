import { getThumbnail, getName, getDisplay, getAddress, getCity, getCountry, getBookings, getRating, getEdit, getDelete } from "./tableColumsFunctions";
export default [
  {
    field: "_id",
    headerName: "ID",
    width: 50,
    minWidth: 200,
    maxWidth: 250,
    sortable: false,
  },
  {
    field: "thumbnail",
    headerName: "Thumbnail",
    width: 400,
    minWidth:400,
    maxWidth:500,
    sortable: false,
    filterable: false,
    renderCell: getThumbnail,
  },
  {
    field: "name",
    headerName: "Name",
    width: 200,
    minWidth: 200,
    maxWidth: 250,
    filterable:true,
    valueGetter: getName,
  },
  {
    field: "display",
    headerName: "Display",
    width:100,
    minWidth: 100,
    maxWidth: 150,
    sortable:false,
    filterable:false,
    renderCell: getDisplay,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
    minWidth: 150,
    maxWidth: 200,
    valueGetter:getAddress
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
    minWidth: 150,
    maxWidth: 200,
    valueGetter:getCity
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
    minWidth: 150,
    maxWidth: 200,
    valueGetter:getCountry
  },
  {
    field: "bookings",
    headerName: "Bookings",
    width: 100,
    minWidth: 100,
    maxWidth: 150,
    renderValue:getBookings
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 150,
    minWidth: 150,
    maxWidth: 200,
    renderCell:getRating
  },

  {
    field: "edit",
    headerName: "Edit",
    width: 50,
    minWidth: 100,
    maxWidth: 150,
    sortable:false,
    filterable: false ,
    renderCell:getEdit,
  },
  {
    field: "delete",
    headerName:"Delete",
    width: 50,
    minWidth: 100,
    maxWidth: 150,
    sortable:false,
    filterable: false ,
    renderCell:getDelete
  },
];
