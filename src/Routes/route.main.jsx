import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Landing = React.lazy(() => import("../Components/landing"));
const Cart = React.lazy(() => import("../Components/CartComponent/index"));

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
            <Cart />
          </Suspense>
        }
      />
    </Routes>
  );
}

export default MainRoute;
