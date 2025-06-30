import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  keepUnusedDataFor: 60, // default 60 seconds
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit) => `/posts?_limit=${limit}`,
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
