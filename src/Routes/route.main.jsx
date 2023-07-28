import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "../Utils/PrivateRoute";

const Landing = React.lazy(() => import("../pages/Homepage/landing"));
const Cart = React.lazy(() => import("../pages/Cart"));
const AuthComponent = React.lazy(() => import("../pages/Auth/AuthComponent"));

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
      <Route path="*" element={<h1>Page not found</h1>} />
    </Routes>
  );
}

export default MainRoute;
