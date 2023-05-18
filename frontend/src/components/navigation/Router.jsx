import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Suspense, lazy } from "react";
import { CircularProgress } from "@mui/material";
import AuthRoutes from "../navigation/routes/AuthRoutes";
import GuestRoutes from "../navigation/routes/GuestRoutes";

const GuestLayout = lazy(() => import("../templates/layouts/GuestLayout"));
const ProtectedRoutes = lazy(() => import("./ProtectedRoutes"));


export default createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/auth"
        element={
          <Suspense fallback={<CircularProgress />}>
            <GuestLayout />
          </Suspense>
        }
      >
        {GuestRoutes.map(route=>{
            return <Route key={route.path} path={route.path} element={
                <Suspense fallback={<CircularProgress />}>
                    <route.component />
                </Suspense>
            }
            index={route.index}
            loader={route.data}
            />
        })}
      </Route>
      <Route
        path="/"
        element={
          <Suspense fallback={<CircularProgress />}>
            <ProtectedRoutes />
          </Suspense>
        }
      >
        {AuthRoutes.map(route=>{
            return <Route key={route.path} path={route.path} element={
                <Suspense fallback={<CircularProgress />}>
                    <route.component />
                </Suspense>
            }
            loader={route.data}/>  
        })}
      </Route>
      <Route path="*" element={<h1>404</h1>} />
    </Route>
  )
);
