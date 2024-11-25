import React, { useEffect, useState } from "react";
import X from "../assets/Vector (8).svg";

const TechnologiesDescriptionComponent = ({ handleActionChange }) => {
  const [Technology, setTechnology] = useState("");
  const Arraays = [
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
      Description:
        "An in-text citation is the brief form of the reference that you include in the body of your work. It gives enough information to uniquely identify the source in your reference list. The brief form usually consists of: family name of the author(s), and.An in-text citation is the brief form of the reference that you include in the body of your work. It gives enough information to uniquely identify the source in your reference list. ",
    },
  ];
  useEffect(() => {
    setTechnology(Arraays[0].technologies);
  }, []);
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`h-[18rem] w-[30rem] bg-bodyColor border border-solid border-bodyColor relative `}>
        <span>
          <img
            src={X}
            alt="X"
            className="absolute right-5 top-3 cursor-pointer"
            onClick={() => handleActionChange(null, null)}
          />
        </span>
        <div className={`mt-5 px-3 flex flex-col gap-3 `}>
          <h2 className="font-bold text-start text-lg">Technology’s</h2>
          <p>{Technology}</p>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesDescriptionComponent;
