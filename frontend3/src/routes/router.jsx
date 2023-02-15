import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../pages/Home";
import Rooms from "../pages/Rooms";
import Layout from "../components/style/Layout";
import { useGetHotels } from "../api/hotel";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} loader={useGetHotels} />
      <Route path="/hotels" element={<Home />} loader={useGetHotels} />
      <Route path="/hotel" element={<Rooms />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="/room" element={<Rooms />} />
      <Route path="/bookings" element={<Rooms />} />
      <Route path="/statistics" element={<Rooms />} />
      <Route path="/login" element={<Rooms />} />
      <Route path="/register" element={<Rooms />} />
      <Route path="/logout" element={<Rooms />} />
    </Route>
  )
);
export default router;
