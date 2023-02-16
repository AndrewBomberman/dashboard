import { getThumbnail, getName, getDisplay } from "./tableColumsFunctions";
export default [
    {
      field: "_id",
      headerName: "ID",
      width: 300,
      minWidth: 150,
      maxWidth: 200,
      sortable: false,
    },
    {
      field: "thumbnail",
      headerName: "Thumbnail",
      width: 200,
      sortable: false,
      renderCell: getThumbnail,
    },
    {
      field: "name",
      headerName: "Name",
      with: 200,
      minWidth: 150,
      maxWidth: 200,
      valueGetter: getName,
    },
    {
      field: "display",
      headerName: "Display",
      width: 100,
      minWidth: 150,
      maxWidth: 200,
      renderCell: getDisplay,
    },
    {
        field: "address1",
        headerName: "Street",
        width: 100,
        minWidth: 150,
        maxWidth: 200,
      },
  ];