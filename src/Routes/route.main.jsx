import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../Utils/PrivateRoute";

const Landing = React.lazy(() => import("../Components/landing"));
const Cart = React.lazy(() => import("../Components/CartComponent/index"));
const AuthComponent = React.lazy(() =>
  import("../Components/Auth/AuthComponent")
);

function MainRoute() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Suspense>
            <Landing />
          </Suspense>
        }
      />
      <Route
        path="/cart"
        element={
          <Suspense>
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          </Suspense>
        }
      />
      <Route
        path="/auth"
        element={
          <Suspense>
            <AuthComponent />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default MainRoute;
