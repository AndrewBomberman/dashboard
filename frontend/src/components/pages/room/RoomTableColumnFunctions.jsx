import { Checkbox, IconButton } from "@mui/material";
import Switch from "@mui/material/Switch";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { updateDisplayService } from "../../../api/services/generalServices";
import useDeleteRoomQuery from "../../../api/internal/queries/room/useDeleteRoomQuery";
import { updateRoomWifiService } from "../../../api/services/roomServices";
import { useNavigate } from "react-router-dom";
export const getThumbnail = (params) => {
  return <img src={params.row.thumbnail} width={200} height={200} />;
};
export const getName = (params) => {
  return params.row.name;
};

export const getDisplay = (params) => {
  return (
    <Switch
      defaultChecked={params.row.display}
      onChange={async (e) => {
        const formData = new FormData();
        formData.append("display", e.target.checked);
        await updateDisplayService(params.row._id, formData, "rooms");
      }}
    />
  );
};
export const getAvailable = (params) => {
  return <Checkbox checked={params.row.available} inputProps={{ "aria-label": "controlled" }}/>;
};
export const getWifi = (params) => {
  return (
    <Checkbox checked={params.row.wifi} inputProps={{ "aria-label": "controlled" }} />
  );
};
export const getBathrooms = (params) => {
  return params.row.nr_bathrooms;
};
export const getBeds = (params) => {
  return params.row.nr_beds;
};

export const getEdit = (params) => {
  const navigate = useNavigate();
  return (
    <IconButton
      color="success"
      onClick={() => {
        navigate("/rooms/" + params.row._id);
      }}
    >
      <EditIcon />
    </IconButton>
  );
};
export const getDelete = (params) => {
  const { mutate } = useDeleteRoomQuery(params.row._id)
  return (
    <IconButton color="error" onClick={() => mutate(params.row._id)}>
      <DeleteIcon />
    </IconButton>
  );
};
