import { BrowserRouter, Routes, Route } from "react-router-dom";
import HotelsPage from "../pages/hotel/HotelsPage";

export default function Router() {
  return (
    <div className="Router">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HotelsPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
