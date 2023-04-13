import { CircularProgress, Typography } from "@mui/material";
import { Suspense, lazy } from "react";
import useGetBookingsQuery from "../../../api/internal/queries/booking/useGetBookingsQuery";
const Table = lazy(() => import("../../templates/TableTemplate"));

export default function BookingsPage() {
  const { data, isLoading, isfetching } = useGetBookingsQuery();
  while (!data || isLoading || isfetching) {
    return <CircularProgress />;
  }
  return (
    <div className="BookingsPage">
      <Typography variant="h1" component="h1">
        Bookings
      </Typography>
      <Suspense fallback={<CircularProgress />}>
        <Table mode={"bookings"} data={data} />
      </Suspense>
    </div>
  );
}
