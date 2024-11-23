import { configureStore } from "@reduxjs/toolkit";
import projectsSlice from "../features/projectsSlice";

export const store = configureStore({
  reducer: {
    project: projectsSlice,
  },
});
