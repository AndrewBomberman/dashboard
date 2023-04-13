import useGetHotelsQuery from "../../../api/internal/queries/hotel/useGetHotelsQuery";
import { CircularProgress, Divider, FormControl, Grid, Stack } from "@mui/material";
import AddHotelForm from "../../templates/AddFormFields/hotel/AddHotelForm";
import { Suspense, lazy } from "react";
const Table = lazy(()=> import ("../../templates/TableTemplate"))
export default function HotelsPage() {
  const { data: hotels, isLoading, isFetching } = useGetHotelsQuery();
  while(isLoading || isFetching) return (<CircularProgress />)

  return (
    <div className="HotelsPage" style={{ display: "flex" }}>
      <Grid container direction={"column"}>
        <AddHotelForm />
        <Divider sx={{marginTop:3}}/>
        <Table mode={"hotels"} data={hotels}/>
      </Grid>
    </div>
  );
}
