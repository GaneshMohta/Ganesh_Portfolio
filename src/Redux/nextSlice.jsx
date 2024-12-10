import { createSlice } from "@reduxjs/toolkit";

const nextSlice = createSlice({
  name: "next",
  initialState: {
    slideIndex: 0,
  },
  reducers: {
    Next: (state, action) => {
      state.slideIndex = (state.slideIndex + 1) % action.payload;
    },
    Prev: (state, action) => {
      state.slideIndex =
        (state.slideIndex - 1 + action.payload) % action.payload;
    },
  },
});

export const { Prev, Next } = nextSlice.actions;

export default nextSlice.reducer;
