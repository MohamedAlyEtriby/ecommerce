import { configureStore } from "@reduxjs/toolkit";
import slicecart from "../features/cartSlice";
export const store = configureStore({
  reducer: {
    cart: slicecart,
  },
});
