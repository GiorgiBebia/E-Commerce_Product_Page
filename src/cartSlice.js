import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.name === action.payload.name
      );
      if (existingItem) {
        state.cart = state.cart.filter(
          (item) => item.name !== action.payload.name
        );
      } else {
        state.cart.push(action.payload);
      }
    },
    removeCartItem: (state) => {
      state.cart = [];
    },
  },
});

export const { addCart, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
