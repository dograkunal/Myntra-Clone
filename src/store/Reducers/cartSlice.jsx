import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [
    { ProductId: 112.2, ProductCount: 2 },
    { ProductId: 225.4, ProductCount: 4 },
    { ProductId: 5545, ProductCount: 5 },
    { ProductId: 1011, ProductCount: 3 },
    { ProductId: 133.2, ProductCount: 2 },
    { ProductId: 11852, ProductCount: 6 },
    { ProductId: 12445, ProductCount: 0 },
  ],
};

export const cartSlice = createSlice({
  name: "AddToCart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload);
      debugger;
    },
    removeFromCart: (state) => {
      debugger;
    },

    EditProductInCart: (state, action) => {
      const UpdatedData = state.cart.map((data) => {
        // debugger;
        if (data.ProductId === action.payload.ProductId) {
          return { ...action.payload };
        }
        return data;
      });
      return {
        ...state,
        cart: UpdatedData,
      };
    },
  },
});

export const { addToCart, removeFromCart, EditProductInCart } =
  cartSlice.actions;
export default cartSlice.reducer;
