import React from "react";
import ReactDOM from "react-dom/client";
import useHotelRoutes from "./api/routes/useHotelRoutes"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HotelsPage from "./components/pages/HotelsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HotelsPage />,
    loader: async() =>{
      const response = await fetch("http://localhost:8000/api/v1/hotels",{
        mode:"cors",
        headers:{"Content-Type": "application/json"},
      })
      return await response.json()
    },
    
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
