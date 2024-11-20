import React from "react";
import { Link } from "react-router-dom";

const ProjectTable = ({ handleActionChange }) => {
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
  ];

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
              Action
            </th>
          </tr>
        </thead>
        <tbody
          className={`${projects.length >= 11 ? "overflow-y-scroll" : ""}`}>
          {projects.map((project, index) => (
            <tr key={project.id}>
              <td className="border border-gray-400 px-2 py-2">{index + 1}</td>
              <td
                className="border border-gray-400 px-2 py-2 cursor-pointer"
                onClick={() =>
                  handleActionChange("viewDescription", project.id)
                }>
                {project.name}
              </td>
              <td
                className="border border-gray-400 px-2 py-2 cursor-pointer"
                onClick={() =>
                  handleActionChange("viewTechnologies", project.id)
                }>
                {project.technologies}
              </td>
              <td
                className="border border-gray-400 px-2 py-2"
                onClick={() => handleActionChange("startDate", project.id)}>
                {project.startDate}
              </td>
              <td className="border border-gray-400 px-2 py-2">
                {project.endDate}
              </td>
              <td className="border border-gray-400 px-2 py-2">
                <Link to={project.github} className="text-blue-600">
                  GitHub
                </Link>
              </td>
              <td className="border border-gray-400 px-2 py-2">
                <a href={project.deploy} className="text-blue-600">
                  Deploy
                </a>
              </td>
              <td className="border border-gray-400 px-2 py-2">
                <a href={project.figma} className="text-blue-600">
                  Figma
                </a>
              </td>
              <td
                className="border border-gray-400 px-2 py-2 cursor-pointer"
                onClick={() => handleActionChange("viewStatus", project.id)}>
                {project.status}
              </td>
              <td
                className="border border-gray-400 px-2 py-2 cursor-pointer"
                onClick={() => handleActionChange("viewBug", project.id)}>
                {project.bugs}
              </td>
              <td className="border border-gray-400 px-2 py-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => handleActionChange("edit", project.id)}>
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded ml-2"
                  onClick={() => handleActionChange("delete", project.id)}>
                  Delete
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
