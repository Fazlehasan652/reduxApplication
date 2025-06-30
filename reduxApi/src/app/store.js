import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "../features/counters/counterSlice";
import postsReduser from "../features/posts/postsSlice";

const store = configureStore({
  reducer: {
    counters: counterReduser,
    posts: postsReduser,
  },
});
export default store;
