import { configureStore } from "@reduxjs/toolkit";
import getProductDataSlice from "./slice/getData";
import addWishlistSlice from "./slice/wishlist";

export const store = configureStore({
  reducer: {
    products: getProductDataSlice,
    wishlist: addWishlistSlice,
  },
});
