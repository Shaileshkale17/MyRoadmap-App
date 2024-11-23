import React, { useState } from "react";
import InputBox from "../components/InputBox";
import { useParams } from "react-router-dom";

const Form = () => {
  // State management for each input
  const [projectName, setProjectName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [figmaLink, setFigmaLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [technologies, setTechnologies] = useState("");
  const [deployLink, setDeployLink] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const { id } = useParams(); // Extracts `id` from the dynamic route
  console.log("Setting up project " + id);
  const handleSubmit = (e) => {
    console.log("dsfdf");
    e.preventDefault();
    const formData = {
      projectName,
      startDate,
      figmaLink,
      githubLink,
      technologies,
      deployLink,
      projectDescription,
    };
    console.log("Submitted Data: ", formData);
    setProjectName("");
    setStartDate("");
    setFigmaLink("");
    setGithubLink("");
    setTechnologies("");
    setDeployLink("");
    setProjectDescription("");
    // You can add further logic for form submission, e.g., API calls
  };

  return (
    <div className="p-6 bg-bodyColor min-h-screen flex flex-col items-center  relative">
      <form onSubmit={handleSubmit}>
        <div className="absolute right-7">
          <button
            type="submit"
            className="px-10 py-2 bg-primaryColor rounded-xl border border-white text-white font-bold">
            {id != undefined ? "Update" : "Submit"}
          </button>
        </div>
        <div className="flex justify-center items-center mt-10 gap-28">
          <InputBox
            id="Project_name"
            label="Project Name"
            width="w-[27rem]"
            setInputValue={setProjectName}
            value={projectName}
          />
          <InputBox
            id="Start_Date"
            label="Start Date"
            type="Date"
            width="w-[27rem]"
            setInputValue={setStartDate}
            value={startDate}
          />
        </div>
        <div className="flex justify-center items-center mt-10 gap-28">
          <InputBox
            id="Figma_Link"
            label="Figma Link"
            width="w-[27rem]"
            setInputValue={setFigmaLink}
            value={figmaLink}
          />
          <InputBox
            id="Github_Link"
            label="Github Link"
            width="w-[27rem]"
            setInputValue={setGithubLink}
            value={githubLink}
          />
        </div>
        <div className="flex justify-center items-center mt-10 gap-28">
          <InputBox
            id="Technologys"
            label="Technology’s"
            width="w-[27rem]"
            setInputValue={setTechnologies}
            value={technologies}
          />
          <InputBox
            id="Deploy_Link"
            label="Deploy Link"
            width="w-[27rem]"
            setInputValue={setDeployLink}
            value={deployLink}
          />
        </div>
        <div className="flex flex-col mt-10">
          <label htmlFor="projectDescription" className="text-lg">
            Project Description
          </label>
          <textarea
            id="projectDescription"
            name="projectDescription"
            rows="5"
            className="rounded-lg w-full p-2 border border-black"
            onChange={(e) => setProjectDescription(e.target.value)}
            value={projectDescription}
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
