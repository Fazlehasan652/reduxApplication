import { createSlice } from "@reduxjs/toolkit";
import initialdata from "./../../data/initialdata";

const countersSlice = createSlice({
  name: "counters",
  initialState: initialdata,
  reducers: {
    // increment action
    increment: (state, action) => {
      const counterIndex = state.findIndex(
        (count) => count.id === action.payload
      );
      state[counterIndex].value++;
    },
    // decrement action
    decrement: (state, action) => {
      const counterIndex = state.findIndex(
        (count) => count.id === action.payload
      );
      state[counterIndex].value--;
    },
  },
});

export default countersSlice.reducer;
export const { increment, decrement } = countersSlice.actions;
