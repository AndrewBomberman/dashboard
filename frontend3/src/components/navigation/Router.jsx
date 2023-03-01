import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import Hotels from "../pages/hotel/table/table";
import AddHotelForm from "../pages/hotel/form/addHotel/addForm";
import Layout from "../style/Layout";
import React from "react";
import EditHotelForm from "../pages/hotel/form/editHotel/editForm";
import Login from "../pages/auth/Login";
import { googleOAuthURL } from "../../api/auth/googleOAuth2";
import Cookies from "js-cookie";
import { useGetHotelRequest } from "../../api/internal/hotel/requests/hotelRequests";

const auth = Cookies.get("auth");

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={auth && <Layout />}>
      <Route index element={auth ? <Hotels />: <Navigate to={"/login"}/>} />
      <Route path="/hotels" element={auth ? <Hotels />: <Navigate to={"/login"}/>} />
      <Route path="/hotels/:id" element={auth ? <EditHotelForm /> : <Navigate to={"/login"}/>} />
      <Route path="/hotels/add" element = {auth ? <AddHotelForm/> : <Navigate to={"/login"}/>}/>
     
      <Route path="/login" 
      element={!auth ? <Login /> :<Navigate to={"/hotels"}/>} 
      loader={!auth && googleOAuthURL} 
      />
      
    </Route>
  )
);
export default router;
