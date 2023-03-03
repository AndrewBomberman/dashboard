import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import DeleteIcon from "@mui/icons-material/Delete";

export const ResetThumbnailButton = ({ setter }) => {
  return (
    <IconButton color="success" onClick={()=>setter()}>
      <RefreshIcon />
    </IconButton>
  );
};
export const DeleteThumbnailButton = ({ setter }) => {
  return (
    <IconButton color="error" onClick={()=>setter()}>
      <DeleteIcon />
    </IconButton>
  );
};
