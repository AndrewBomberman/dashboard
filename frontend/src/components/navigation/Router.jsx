import HotelsPage from "../pages/hotel/HotelsPage";
import HotelPage from "../pages/hotel/HotelPage";
import RoomPage from "../pages/room/RoomPage";
import RegisterPage from "../pages/auth/RegisterPage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { getService } from "../../api/services/generalServices";
import LoginPage from "../pages/auth/LoginPage";
import { googleOAuthURL } from "../../api/internal/auth";
import ProtectedRoutes from "./ProtectedRoutes";
import GuestLayout from "../templates/layouts/GuestLayout";
import StatisticsPage from "../pages/statistics/StatisticsPage";
import { FamillyTypeStatistics, HotelStatisctics, MealPlanStatistics } from "../../api/internal/statistics";
import BookingsPage from "../pages/bookings/BookingsPage";


export default createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/auth" element={<GuestLayout />}>
        <Route
          index
          element={<LoginPage />}
          loader={async () => {
            return await googleOAuthURL();
          }}
        />
        
        <Route
          path="register"
          element={<RegisterPage />}
          loader={async () => {
            return await googleOAuthURL();
          }}
        />
      </Route>

      <Route path="/" element={<ProtectedRoutes />}>
        <Route
          index
          element={<HotelsPage />}
        />
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
        <Route path="/statistics" element={<StatisticsPage />} loader={async ()=>{
          return {
            last_year_bookings:await HotelStatisctics(),
            meal_plan_stats:await MealPlanStatistics(),
            family_type_stats:await FamillyTypeStatistics()
          } 
        }}/>
         <Route path="/bookings" element={<BookingsPage />}/>
      </Route>
      
    </Route>
  )
);
