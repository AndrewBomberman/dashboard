import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelsPage from "../pages/hotel/HotelsPage";
import HotelPage from "../pages/hotel/HotelPage";
import AddHotel from "../forms/hotel/add";

export default function Router() {
  return (
    <div className="Router">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HotelsPage />}
          />
          <Route
            path="/hotels"
            element={<HotelsPage />}
          />
          <Route
            path="/hotels/:id"
            element={<HotelPage />}
          />
          <Route
            path="/hotels/add"
            element={<AddHotel/>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
