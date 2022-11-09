import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HotelPage from "./pages/HotelPage";
import HotelsPage from "./pages/HotelsPage";

export default function Router() {

  return (
    <div className="Router">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HotelsPage />} />
          <Route path="/hotels" element={<HotelsPage />} />
          <Route path="/hotels/:id" element={<HotelPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
