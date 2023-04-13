import useGetHotelsQuery from "../../../api/internal/queries/hotel/useGetHotelsQuery";
import {
  CircularProgress,
  Divider,
  FormControl,
  Grid,
  Typography,
} from "@mui/material";
import AddHotelForm from "../../templates/AddFormFields/hotel/AddHotelForm";
import { Suspense, lazy } from "react";
const Table = lazy(() => import("../../templates/TableTemplate"));
export default function HotelsPage() {
  const { data: hotels, isLoading, isFetching } = useGetHotelsQuery();
  while (!hotels || isLoading || isFetching) return <CircularProgress />;

  return (
    <div className="HotelsPage" style={{ display: "flex" }}>
      <Grid container direction={"column"}>
        <AddHotelForm />
        <Typography variant="h2" component="h2" marginTop={5}>
          Hotels
        </Typography>
        <Suspense fallback={<CircularProgress />} >
          <Table mode={"hotels"} data={hotels} />
        </Suspense>
      </Grid>
    </div>
  );
}
