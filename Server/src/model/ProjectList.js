import mongoose from "mongoose";

const ProjectListSchema = mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },
    startDate: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    technologies: {
      type: Array,
      required: true,
      default: [],
    },
    figmaLink: {
      type: String,
    },
    githubLink: {
      type: String,
    },
    deployLink: {
      type: String,
    },
    projectDescription: {
      type: String,
    },
    collaborators: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

export const ProjectList = mongoose.model("ProjectList", ProjectListSchema);
