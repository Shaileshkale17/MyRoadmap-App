import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "../assets/mdi_bin-outline.svg";
import UpdateIcon from "../assets/tabler_edit.svg";
import { useSelector, useDispatch } from "react-redux";
import {
  setProjects,
  editProject,
  deleteProject,
} from "../features/projectsSlice";
const ProjectTable = ({ handleActionChange, search }) => {
  const dispatch = useDispatch();
  const getProjects = useSelector((state) => state.project.project);
  // Sample data

  const projects = [
    {
      id: 1,
      name: "Alfreds Futterkiste",
      technologies: "React, Node.js",
      startDate: "2023-01-01",
      endDate: "2023-06-01",
      github: "https://github.com/example1",
      deploy: "https://deploy.com/project1",
      figma: "https://figma.com/example1",
      status: "Completed",
      bugs: "Not Bug",
    },
    {
      id: 2,
      name: "Tech Innovations",
      technologies: "Vue.js, Express",
      startDate: "2023-02-15",
      endDate: "2023-08-15",
      github: "https://github.com/example2",
      deploy: "https://deploy.com/project2",
      figma: "https://figma.com/example2",
      status: "In Progress",
      bugs: "Minor Bugs",
    },
    {
      id: 3,
      name: "Creative Hub",
      technologies: "Angular, MongoDB",
      startDate: "2023-03-10",
      endDate: "2023-09-10",
      github: "https://github.com/example3",
      deploy: "https://deploy.com/project3",
      figma: "https://figma.com/example3",
      status: "Completed",
      bugs: "No Bugs",
    },
    {
      id: 4,
      name: "Smart Dashboard",
      technologies: "React, Firebase",
      startDate: "2023-04-01",
      endDate: "2023-12-01",
      github: "https://github.com/example4",
      deploy: "https://deploy.com/project4",
      figma: "https://figma.com/example4",
      status: "In Progress",
      bugs: "Critical Bugs",
    },
    {
      id: 5,
      name: "Food Delivery",
      technologies: "Node.js, MongoDB",
      startDate: "2023-05-01",
      endDate: "2023-11-01",
      github: "https://github.com/example5",
      deploy: "https://deploy.com/project5",
      figma: "https://figma.com/example5",
      status: "Completed",
      bugs: "Minor Bugs",
    },
    {
      id: 6,
      name: "Task Manager",
      technologies: "React, GraphQL",
      startDate: "2023-06-10",
      endDate: "2023-12-10",
      github: "https://github.com/example6",
      deploy: "https://deploy.com/project6",
      figma: "https://figma.com/example6",
      status: "Completed",
      bugs: "No Bugs",
    },
    {
      id: 7,
      name: "E-commerce Platform",
      technologies: "Vue.js, Node.js",
      startDate: "2023-07-05",
      endDate: "2024-01-05",
      github: "https://github.com/example7",
      deploy: "https://deploy.com/project7",
      figma: "https://figma.com/example7",
      status: "In Progress",
      bugs: "Minor Bugs",
    },
    {
      id: 8,
      name: "Online Learning System",
      technologies: "Angular, Firebase",
      startDate: "2023-08-20",
      endDate: "2024-02-20",
      github: "https://github.com/example8",
      deploy: "https://deploy.com/project8",
      figma: "https://figma.com/example8",
      status: "Completed",
      bugs: "Not Bug",
    },
    {
      id: 9,
      name: "Social Media App",
      technologies: "React, Node.js, MongoDB",
      startDate: "2023-09-15",
      endDate: "2024-03-15",
      github: "https://github.com/example9",
      deploy: "https://deploy.com/project9",
      figma: "https://figma.com/example9",
      status: "In Progress",
      bugs: "Major Bugs",
    },
    {
      id: 10,
      name: "Healthcare Management System",
      technologies: "Vue.js, Firebase",
      startDate: "2023-10-01",
      endDate: "2024-04-01",
      github: "https://github.com/example10",
      deploy: "https://deploy.com/project10",
      figma: "https://figma.com/example10",
      status: "Completed",
      bugs: "Minor Bugs",
    },
    {
      id: 11,
      name: "Healthcare Management System",
      technologies: "Vue.js, Firebase",
      startDate: "2023-10-01",
      endDate: "2024-04-01",
      github: "https://github.com/example10",
      deploy: "https://deploy.com/project10",
      figma: "https://figma.com/example10",
      status: "Completed",
      bugs: "Minor Bugs",
    },
    {
      id: 12,
      name: "Healthcare Management System",
      technologies: "Vue.js, Firebase",
      startDate: "2023-10-01",
      endDate: "2024-04-01",
      github: "https://github.com/example10",
      deploy: "https://deploy.com/project10",
      figma: "https://figma.com/example10",
      status: "Completed",
      bugs: "Minor Bugs",
    },
  ];

  useEffect(() => {
    dispatch(setProjects(projects));
  }, [dispatch]);

  return (
    <div>
      <table className="min-w-full table-auto border-collapse border border-gray-400">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-4 py-2 text-left">S.No</th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Project Name
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Technology’s
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Start Date
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              End Date
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              GitHub Link
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Deploy Link
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Figma Link
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Project Status
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Bug's Summary
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Show project
            </th>
            <th className="border border-gray-400 px-4 py-2 text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody
          className={`${projects.length >= 11 ? "overflow-y-scroll" : ""}`}>
          {getProjects
            .filter((project) =>
              project.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((project, index) => (
              <tr key={project.id}>
                <td className="border border-gray-400 px-2 text-center py-2">
                  {index + 1}
                </td>
                <td
                  className="border border-gray-400 px-2 py-2 text-center cursor-pointer"
                  onClick={() =>
                    handleActionChange("viewDescription", project.id)
                  }>
                  {project.name.length <= 15
                    ? project.name
                    : project.name.slice(0, 15) + "..."}
                </td>
                <td
                  className="border border-gray-400 px-2 py-2 text-center cursor-pointer"
                  onClick={() =>
                    handleActionChange("viewTechnologies", project.id)
                  }>
                  {project.technologies.length <= 15
                    ? project.technologies
                    : project.technologies.slice(0, 15) + "..."}
                </td>
                <td
                  className="border border-gray-400 px-4 py-2 text-center cursor-pointer"
                  onClick={() => handleActionChange("startDate", project.id)}>
                  {project.startDate}
                </td>
                <td
                  className="border border-gray-400 px-2 py-2 text-center cursor-pointer"
                  onClick={() => handleActionChange("EndDate", project.id)}>
                  {project.endDate}
                </td>
                <td className="border border-gray-400 px-2 py-2 text-center cursor-pointer">
                  <Link to={project.github} className="text-blue-600">
                    GitHub
                  </Link>
                </td>
                <td className="border border-gray-400 px-2 py-2 text-center cursor-pointer">
                  <a href={project.deploy} className="text-blue-600">
                    Deploy
                  </a>
                </td>
                <td className="border border-gray-400 px-2 py-2 text-center cursor-pointer">
                  <a href={project.figma} className="text-blue-600">
                    Figma
                  </a>
                </td>
                <td
                  className="border border-gray-400 px-2 py-2 text-center cursor-pointer"
                  onClick={() => handleActionChange("viewStatus", project.id)}>
                  {project.status.length <= 15
                    ? project.status
                    : project.status.slice(0, 15) + "..."}
                </td>
                <td
                  className="border border-gray-400 px-2 py-2 text-center cursor-pointer"
                  onClick={() => handleActionChange("viewBug", project.id)}>
                  {project.bugs.length <= 15
                    ? project.bugs
                    : project.bugs.slice(0, 15) + "..."}
                </td>
                <td
                  className="border border-gray-400 px-2 py-2 text-center  cursor-pointer"
                  onClick={() => handleActionChange("showProject", project.id)}>
                  Yes
                </td>
                <td className="border border-gray-400 text-center px-2 py-2 ">
                  <button
                    onClick={() => handleActionChange("edit", project.id)}>
                    <img src={UpdateIcon} alt="Update" />
                  </button>
                  <button
                    onClick={() => handleActionChange("delete", project.id)}>
                    <img src={DeleteIcon} alt="Delete" />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProjectTable;
