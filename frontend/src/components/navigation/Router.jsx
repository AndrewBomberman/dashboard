import HotelsPage from "../pages/hotel/HotelsPage";
import HotelPage from "../pages/hotel/HotelPage";
import RoomPage from "../pages/room/RoomPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import { getService } from "../../api/services/generalServices";
import AddHotelPage from "../pages/hotel/AddHotelPage";
import LoginPage from "../pages/auth/LoginPage";
import { googleOAuthURL } from "../../api/internal/auth";
import ProtectedRoutes from "./ProtectedRoutes";

export default createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/login"
        element={<LoginPage />}
        loader={async () => {
          return await googleOAuthURL();
        }}
      />
      <Route path="/" element={<ProtectedRoutes />}>
        <Route index element={<HotelsPage />} />
        <Route path="/hotels" element={<HotelsPage />} />
        <Route
          path="/hotels/:id"
          element={<HotelPage />}
          loader={async ({ params }) => {
            return await getService("hotels", { _id: params.id });
          }}
        />
        <Route
          path="/rooms/:id"
          element={<RoomPage />}
          loader={async ({ params }) => {
            return await getService("rooms", { _id: params.id });
          }}
        />
        <Route path="/hotels/add" element={<AddHotelPage />} />
      </Route>
    </Route>
  )
);
