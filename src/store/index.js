import { configureStore } from "@reduxjs/toolkit";
import navColorReducer from "./navColorSlice";

export default configureStore({
  reducer: {
    navColor: navColorReducer,
  },
});
