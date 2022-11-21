import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import HotelPage from "./pages/HotelPage";
import HotelsPage from "./pages/HotelsPage";
import AddHotelForm from "./forms/submit/AddHotelForm"
import Cookies from 'js-cookie'
import { useEffect } from "react";
import Test from "./pages/Test";

export default function Router() {
  const auth = Cookies.get('auth')
  return (
    <div className="Router">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={!auth ? <LoginPage /> :<Navigate to="/hotels"/>} />
          <Route path="/register" element={!auth ? <RegisterPage /> : <Navigate to="/hotels"/>} />
          <Route
            path="/"
            element={<Test />}
          />

          <Route
            path="/hotels"
            element={auth ? <HotelsPage />:<Navigate to="/login"/>}
          />
          <Route
            path="/hotels/:id"
            element={<HotelPage />}
          />
          <Route
            path="/hotels/add"
            element={<AddHotelForm />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
