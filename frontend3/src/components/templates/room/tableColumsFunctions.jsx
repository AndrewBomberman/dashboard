import { Checkbox, IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteRoomQuery } from "../../../api/internal/room/query/roomQueries";
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
export const getDescription = (params) => {
  return params.row.description;
};
export const getPrice = (params) => {
  return params.row.price_per_night.$numberDecimal;
};
export const getDisplay = (params) => {
  return <Switch defaultChecked={params.row.display} />;
};
export const getBooked = (params) => {
  return <Checkbox checked={params.row.booked} />;
};

export const getEdit = (params) => {
  const navigate = useNavigate()
  return (
    <IconButton color="success" onClick={()=>{navigate("/rooms/"+params.row._id)}}>
      <EditIcon />
    </IconButton>
  );
};
export const getDelete = (params) => {
  const { mutate } = useDeleteRoomQuery(params.row._id)
  return (
    <IconButton color="error" onClick={()=> mutate(params.row._id)}>
      <DeleteIcon />
    </IconButton>
  );
};


