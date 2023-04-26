import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const CART_STORAGE_KEY = "cart";


const CartSlice = createSlice({
  name: "cart",
  initialState: localStorage.getItem(CART_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(CART_STORAGE_KEY))
    : [],

  reducers: {
    addCart(state, action) {
      const productToAdd = action.payload;
      const existingProductIndex = state.findIndex(
        (item) => item.id === productToAdd.id
      );
      if (existingProductIndex === -1) {
        state.push(productToAdd);
      } else {
        state[existingProductIndex].quantity++;
      }
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
    },

    removeCart(state, action) {
      const newState = state.filter((item) => item.id !== action.payload);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(newState));
      return newState;
    },
  },
});

export const { addCart, removeCart } = CartSlice.actions;

export default CartSlice.reducer;
