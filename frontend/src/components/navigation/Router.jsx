import HotelsPage from "../pages/hotel/HotelsPage";
import HotelPage from "../pages/hotel/HotelPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../templates/Layout"
import { getService } from "../../api/services/generalServices";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HotelsPage />} />
      <Route path="/hotels" element={<HotelsPage />} />
      <Route path="/hotels/:id" element={<HotelPage/>} loader={async ({params})=> {return await getService(params.id, "hotels")}}/>
    </Route>
  )
);
