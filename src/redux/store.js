import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/api";
import productsBuildReducer from './features/productsBuild/productsBuildSlice'
export default configureStore({
  reducer: {
    productsBuild: productsBuildReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
