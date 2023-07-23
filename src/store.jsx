import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Components/Reducers/cartSlice";

export default configureStore({
  reducer: {
    ProductCount: cartSlice,
  },
});
