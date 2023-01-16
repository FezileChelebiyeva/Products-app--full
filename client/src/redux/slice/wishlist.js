import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  product: [],
};

export const addProducts = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      state.product?.push(action.payload);
    },
    removeWishlist: (state, action) => {
      state.product = state.product?.filter(
        (elem) => elem.id !== action.payload
      );
    },
  },
});

export const { addWishlist, removeWishlist } = addProducts.actions;
export default addProducts.reducer;
