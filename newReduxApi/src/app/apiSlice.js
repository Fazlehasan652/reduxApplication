import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  // tagTypes: ["posts","post"],
  tagTypes: ["posts"],
  // keepUnusedDataFor: 60, // default 60 seconds
  // refetchOnReconnect: true,
  // refetchOnFocus: true,
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: (limit) => `/posts?_limit=${limit}`,
      // keepUnusedDataFor: 5,
      providesTags: ["posts"],
    }),
    getPost: builder.query({
      query: (id) => `/posts/${id}`,
      // providesTags: (result, error, arg) => [{ type: "post", id: arg }],
    }),
    addPost: builder.mutation({
      query: (data) => ({
        url: `/posts`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery, useAddPostMutation } =
  apiSlice;
