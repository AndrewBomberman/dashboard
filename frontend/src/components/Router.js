import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HotelPage from "./pages/HotelPage";
import HotelsPage from "./pages/HotelsPage";
import { useCookies } from "react-cookie";

export default function Router() {
  const [cookies, setCookie, removeCookie] = useCookies()

  return (
    <div className="Router">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/"
            element={cookies?.auth ?<HotelsPage /> : <LoginPage />}
          />

          <Route
            path="/hotels"
            element={cookies?.auth ? <HotelsPage /> : <LoginPage />}
          />
          <Route
            path="/hotels/:id"
            element={cookies?.auth ? <HotelPage /> : <LoginPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
