import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
};

const projectsSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    setProjects: (state, action) => {
      state.project = action.payload;
    },
    EditProject: (state, action) => {
      const { id, updateData } = action.payload;
      const index = state.project.indexOf((proj) => proj.id === id);

      if (index !== -1) {
        state.project[index] = {
          ...state.project[index],
          ...updateData,
        };
      }
    },
    deleteProject: (state, action) => {
      state.project = state.project.filter(
        (project) => project.id !== action.payload
      );
    },
  },
});

export const { setProjects, editProject, deleteProject } =
  projectsSlice.actions;

export default projectsSlice.reducer;
