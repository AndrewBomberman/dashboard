import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Hotels from "../../pages/hotel/table/table";
import Layout from "../../style/Layout";
import { useGetHotels } from "../../../api/hotel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Hotels />} loader={useGetHotels} />
      <Route path="/hotels" element={<Hotels />} loader={useGetHotels} />
    </Route>
  )
);
export default router;
