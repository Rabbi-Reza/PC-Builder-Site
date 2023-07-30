import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const initialState = {
    products: [],
  };

// Define our single API slice object
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getNewses: builder.query({
      query: () => "/products",
    }),
  }),
});

export const { useGetNewsesQuery } = apiSlice;
