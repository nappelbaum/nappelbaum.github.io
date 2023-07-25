import { createSlice } from "@reduxjs/toolkit";

const navColorSlice = createSlice({
  name: "navDarkColor",
  initialState: {
    navDarkColor: false,
    navFix: false,
  },
  reducers: {
    changeNavDarkColor(state, action) {
      state.navDarkColor = action.payload.state;
    },
    changeNavFix(state, action) {
      state.navFix = action.payload.state;
    },
  },
});

export const { changeNavDarkColor, changeNavFix } = navColorSlice.actions;

export default navColorSlice.reducer;
