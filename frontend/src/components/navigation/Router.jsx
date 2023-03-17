import HotelsPage from "../pages/hotel/HotelsPage";
import HotelPage from "../pages/hotel/HotelPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "../templates/Layout"
import getHotelRequest from "../../api/internal/requests/hotel/getHotelRequest";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HotelsPage />} />
      <Route path="/hotels" element={<HotelsPage />} />
      <Route path="/hotels/:id" element={<HotelPage/>} loader={async ({params})=> {return await getHotelRequest(params.id)}}/>
    </Route>
  )
);
