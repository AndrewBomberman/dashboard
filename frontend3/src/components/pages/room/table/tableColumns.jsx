import { getThumbnail, getName, getDisplay, getAddress, getCity, getCountry, getBookings, getRating, getEdit, getDelete } from "./tableColumsFunctions";
export default [
  {
    field: "_id",
    headerName: "ID",
    width: 50,
    minWidth: 50,
    maxWidth: 100,
    sortable: false,
  },
  {
    field: "thumbnail",
    headerName: "Thumbnail",
    width: 200,
    sortable: false,
    filterable: false,
    renderCell: getThumbnail,
  },
  {
    field: "name",
    headerName: "Name",
    width: 100,
    minWidth: 100,
    maxWidth: 200,
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
    renderValue:getAddress
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
    minWidth: 150,
    maxWidth: 200,
    renderValue:getCity
  },
  {
    field: "country",
    headerName: "Country",
    width: 100,
    minWidth: 150,
    maxWidth: 200,
    renderValue:getCountry
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
