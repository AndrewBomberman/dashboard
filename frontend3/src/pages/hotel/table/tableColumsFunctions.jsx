import Switch  from "@mui/material/Switch";
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
    return (
      <Switch
        defaultChecked={params.row.display}
      />
    );
  };