import { IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Rating from '@mui/material/Rating';
import { useDeleteHotelQuery } from "../../../../api/internal/hotel/query/hotelQueries";
import { useNavigate } from "react-router-dom";
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
 
  return (params.row.address.address1 + " " +params.row.address.address2)
};
export const getCity = (params) => {
  console.log(params)
  return params.row.address.city;
};
export const getCountry = (params) => {
  return params.row.address.country;
};
export const getBookings = (params) => {
  return params.row.address.bookings
}
export const getRating = (params) => {
  return <Rating name="read-only" value={Number(params.row.rating.$numberDecimal)} readOnly />
}
export const getEdit = (params) => {
  const navigate = useNavigate()
  return (
    <IconButton color="success" onClick={()=>{navigate("/hotels/"+params.row._id)}}>
      <EditIcon />
    </IconButton>
  );
};
export const getDelete = (params) => {
  const { mutate } = useDeleteHotelQuery(params.row._id)
  return (
    <IconButton color="error" onClick={()=> mutate(params.row._id)}>
      <DeleteIcon />
    </IconButton>
  );
};


