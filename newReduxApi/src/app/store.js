import { configureStore } from "@reduxjs/toolkit";
import counterReduser from "../features/counters/counterSlice";
import { apiSlice } from "./apiSlice";

// custom Middleware

// const myLogger = (store) => (next) => (action) => {
//   console.log(`Action is ${JSON.stringify(action)}`);
//   console.log(`Current State is ${JSON.stringify(store.getState())}`);
//   next(action);
// };

const store = configureStore({
  reducer: {
    counters: counterReduser,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDeafultMiddleware) => {
    // console.log(getDeafultMiddleware())
    // return getDeafultMiddleware().concat(myLogger)
    return getDeafultMiddleware().concat(apiSlice.middleware);
  },
});
export default store;
