import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Hotels from "../pages/hotel/table/table";
import AddHotelForm from "../pages/hotel/form/addHotel/addForm";
import Layout from "../style/Layout";
import React from "react";
import EditHotelForm from "../pages/hotel/form/editHotel/editForm";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        index
        element={<Hotels />}
        
      />
      <Route path="/hotels" element={<Hotels />}/>
      <Route path="/hotels/:id" element={<EditHotelForm />}/>
      <Route
        path="/hotels/add"
        element={<AddHotelForm />}
      />
    </Route>
  )
);
export default router;
