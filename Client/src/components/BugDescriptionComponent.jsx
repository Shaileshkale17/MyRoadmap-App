import React, { useEffect, useState } from "react";
import X from "../assets/Vector (8).svg";
import SelectBox from "./selectBox";
import Button from "./Button";

const BugDescriptionComponent = ({ handleActionChange, id }) => {
  const [Description, setDescription] = useState("");
  const BugList = [
    { value: "UI_not_responsive", label: "UI not responsive" },
    { value: "button_not_clickable", label: "Button not clickable" },
    { value: "form_validation_failed", label: "Form validation failed" },
    { value: "data_not_loading", label: "Data not loading" },
    { value: "incorrect_error_message", label: "Incorrect error message" },
    { value: "page_load_timeout", label: "Page load timeout" },
    { value: "image_not_displayed", label: "Image not displayed" },
    { value: "dropdown_not_working", label: "Dropdown not working" },
    { value: "api_call_failed", label: "API call failed" },
    { value: "unexpected_logout", label: "Unexpected logout" },
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
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`h-[18rem] w-[30rem] bg-bodyColor border border-solid border-primaryColor relative rounded-md ${
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
            <SelectBox label="Select Your Bug" options={BugList} />
            <div className="flex gap-6 items-center justify-center">
              <Button title="Submit" type="submit" />
              <Button title="Bug List" type="button" link={`/BugList/${id}`} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BugDescriptionComponent;
