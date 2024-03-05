import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./redux/productSlice";

export default configureStore({
  reducer: {
    product: productSlice,
  },
});
