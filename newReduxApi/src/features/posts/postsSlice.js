import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getposts } from "./postsApi";

const initialState = {
  isLoading: false,
  isError: false,
  posts: [],
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/featchPosts", async () => {
  const posts = await getposts();
  return posts;
});

const postsSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        (state.isLoading = false), (state.posts = action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message || "An unKnown error  occurred";
      });
  },
});

export default postsSlice.reducer;
