import { ProjectList } from "../model/ProjectList";

export const createProject = async (req, res) => {
  const {
    projectName,
    startDate,
    figmaLink,
    githubLink,
    technologies,
    deployLink,
    projectDescription,
  } = req.body;
  try {
    if (!projectName && !startDate && !technologies) {
      res.status(404).send({
        message: "Project Name,Start Date and technologie are required",
        success: false,
      });
    }
    const SaveProject = await ProjectList.create({
      projectName,
      startDate,
      figmaLink,
      githubLink,
      technologies,
      deployLink,
      projectDescription,
    });

    if (!SaveProject) {
      res
        .status(400)
        .json({ message: "Project creation failed ", success: false });
    }

    res.status(201).json({ data: SaveProject, success: true });
  } catch (error) {
    res.status(500).json({
      message: "Error creating project",
      error,
      success: false,
    });
  }
};

export const createGetAll = async (req, res) => {
  try {
    const allProjects = await ProjectList.find({});
    res.status(200).json({
      data: allProjects,
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error project Data not found",
      error,
      success: false,
    });
  }
};

export const createGetOne = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res
        .status(404)
        .json({ message: "Please enter a valid id", success: false });
    }
    const ProjectOne = await ProjectList.findById(id);

    if (!ProjectOne) {
      res.status(404).json({ message: "Project not found !", success: false });
    }

    res.status(200).json({ data: ProjectOne, success: true });
  } catch (error) {
    res.status(500).json({
      message: "Error project not found by id",
      error,
      success: false,
    });
  }
};

export const createUpdate = async (req, res) => {
  const { id } = req.params;
  const {
    projectName,
    startDate,
    figmaLink,
    githubLink,
    technologies,
    deployLink,
    projectDescription,
  } = req.body;
  try {
    if (!id) {
      res
        .status(404)
        .json({ message: "Please enter a valid id", success: false });
    }

    const updateProject = await ProjectList.findByIdAndUpdate(
      id,
      {
        projectName,
        startDate,
        figmaLink,
        githubLink,
        technologies,
        deployLink,
        projectDescription,
      },
      { new: true }
    );

    res.status(204).json({ data: updateProject, success: true });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating project", error, success: false });
  }
};

export const createDelete = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      res
        .status(404)
        .json({ message: "Please enter a valid id", success: false });
    }

    await ProjectList.findByIdAndDatele(id);

    res
      .status(200)
      .json({ message: "Deleted successfully for project ", success: true });
  } catch (error) {
    res
      .status(200)
      .json({ message: "Error Deleted project", error, success: true });
  }
};
