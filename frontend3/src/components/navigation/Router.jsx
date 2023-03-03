import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import AddHotelForm from "../pages/hotel/form/addHotel/addForm";
import Layout from "../style/Layout";
import React from "react";
import Login from "../pages/auth/Login";
import { googleOAuthURL } from "../../api/auth/googleOAuth2";
import Cookies from "js-cookie";
import HotelsPage from "../pages/hotel/HotelsPage";
import HotelPage from "../pages/hotel/HotelPage";
import AddHotelPage from "../pages/hotel/AddHotelPage";

const auth = Cookies.get("auth");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={auth && <Layout />}>
      <Route
        index
        element={auth ? <HotelsPage /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/hotels"
        element={auth ? <HotelsPage /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/hotels/:id"
        element={auth ? <HotelPage /> : <Navigate to={"/login"} />}
      />
      <Route
        path="/hotels/add"
        element={auth ? <AddHotelPage /> : <Navigate to={"/login"} />}
      />

      <Route
        path="/login"
        element={!auth ? <Login /> : <Navigate to={"/hotels"} />}
        loader={!auth && googleOAuthURL}
      />
    </Route>
  )
);
export default router;
