import { getBooked, getDelete, getDisplay, getEdit, getName, getPrice, getThumbnail } from "./tableColumsFunctions";
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
      renderCell:getThumbnail
    
    },
    {
      field: "name",
      headerName: "Name",
      width: 100,
      minWidth: 100,
      maxWidth: 200,
      filterable:true,
      valueGetter: getName
     
    },
    {
      field: "display",
      headerName: "Display",
      width:100,
      minWidth: 100,
      maxWidth: 150,
      sortable:false,
      filterable:false,
      renderCell:getDisplay
    },
    {
      field: "booked",
      headerName: "Booked",
      width:100,
      minWidth: 100,
      maxWidth: 150,
      sortable:false,
      filterable:false,
      renderCell:getBooked
    
    },
    {
      field: "price_per_night",
      headerName: "Price",
      width:100,
      minWidth: 100,
      maxWidth: 150,
      sortable:false,
      filterable:false,
      valueGetter:getPrice
    
    },
    {
      field: "nr_beds",
      headerName: "Nr Beds",
      width:100,
      minWidth: 100,
      maxWidth: 150,
      sortable:false,
      filterable:false,
    
    },
    {
      field: "nr_bathrooms",
      headerName: "Nr Bathrooms",
      width:150,
      minWidth: 150,
      maxWidth: 200,
      sortable:false,
      filterable:false,
    
    },
  
    {
      field: "edit",
      headerName: "Edit",
      width: 50,
      minWidth: 100,
      maxWidth: 150,
      sortable:false,
      filterable: false ,
      renderCell:getEdit
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