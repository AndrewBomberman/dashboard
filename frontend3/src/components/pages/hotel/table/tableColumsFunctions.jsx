import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
export const getThumbnail = (params) => {
  return (
    <img
      src={
        params.row.thumbnail ??
        "http://localhost:8000/images/sample/no-image.png"
      }
      width={200}
      height={200}
    />
  );
};
export const getName = (params) => {
  return params.row.name;
};
export const getDisplay = (params) => {
  return <Switch defaultChecked={params.row.display} />;
};
export const getAddress = (params) => {
  return (
    params.row.nr +
    " " +
    params.row.address.address1 +
    " " +
    params.row.address.address2 +
    " " +
    params.row.address.postcode
  );
};
export const getCity = (params) => {
  return params.row.address.city;
};
export const getCountry = (params) => {
  return params.row.address.country;
};
export const getBookings = (params) => {
  return params.row.address.bookings
}
export const getRating = (params) => {
  return <Rating name="read-only" value={params.row.rating.$numberDecimal} readOnly />
}
export const getEdit = (params) => {
  return (
    <IconButton color="success">
      <EditIcon />
    </IconButton>
  );
};
export const getDelete = (params) => {
  return (
    <IconButton color="error">
      <DeleteIcon />
    </IconButton>
  );
};


