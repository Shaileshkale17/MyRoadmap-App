import React, { useEffect, useState } from "react";
import X from "../assets/Vector (8).svg";
import SelectBox from "./selectBox";
import Button from "./Button";

const ProjectStatusComponent = ({ handleActionChange, id }) => {
  const [Description, setDescription] = useState("");
  const StatusList = [
    { value: "in_progress", label: "In Progress" },
    { value: "completed", label: "Completed" },
    { value: "not_started", label: "Not Started" },
    { value: "on_hold", label: "On Hold" },
    { value: "cancelled", label: "Cancelled" },
    { value: "delayed", label: "Delayed" },
    { value: "under_review", label: "Under Review" },
    { value: "pending_approval", label: "Pending Approval" },
    { value: "finished", label: "Finished" },
    { value: "archived", label: "Archived" },
    { value: "in_design", label: "In Design" },
    { value: "system_Design", label: "System Design" },
    { value: "Working_system_Design", label: "Working System Design" },
    { value: "backend_development", label: "Backend Development" },
    { value: "frontend_development", label: "Frontend Development" },
    { value: "testing", label: "Testing" },
    { value: "deployment", label: "Deployment" },
    { value: "maintenance", label: "Maintenance" },
    { value: "client_review", label: "Client Review" },
    { value: "internal_review", label: "Internal Review" },
    { value: "ready_for_testing", label: "Ready for Testing" },
    { value: "ready_for_deployment", label: "Ready for Deployment" },
  ];
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
    setDescription(Arraays[0].Description);
  }, []);
  const UPdateBugSubmit = (e) => {
    e.preventDefault();
    console.log("update Bug Submit");
  };
  return (
    <div
      className={`h-[18rem] w-[30rem] bg-[#CEECCA] border border-solid border-black relative rounded-md ${
        Description.length >= 571 ? "overflow-y-scroll" : ""
      }`}>
      <span>
        <img
          src={X}
          alt="X"
          className="absolute right-5 top-3 cursor-pointer"
          onClick={() => handleActionChange(null, null)}
        />
      </span>
      <div
        className={`h-full px-3 flex flex-col gap-3 justify-center items-center`}>
        <form onClick={UPdateBugSubmit} className="flex flex-col gap-8">
          <SelectBox label="Select Your Status" options={StatusList} />
          <div className="flex gap-6 items-center justify-center">
            <Button title="Submit" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProjectStatusComponent;
