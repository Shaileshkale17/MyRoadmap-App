import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Button from "../components/Button";
import ProjectTable from "../components/ProjectTable";
import ProjectDescriptionComponent from "../components/ProjectDescriptionComponent";
import ProjectStatusComponent from "../components/ProjectStatusComponent";
import BugDescriptionComponent from "../components/BugDescriptionComponent";
import Form from "../Pages/Form";
import DeleteComponent from "../components/DeleteComponent";
import StartComponent from "../components/StartComponent";
import { useNavigate } from "react-router-dom";
import TechnologiesDescriptionComponent from "../components/TechnologiesDescriptionComponent";
import EndDateComponent from "../components/EndDateComponent";
const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentAction, setCurrentAction] = useState({
    action: null, // actions: 'viewDescription', 'edit', 'status', 'bug', 'delete', 'startDate'
    id: null,
    itemName: "", // Add itemName here for the delete action
  });
  const Navigate = useNavigate();
  const handleActionChange = (action, id, itemName = "") => {
    setCurrentAction({ action, id, itemName });
  };

  const handleDelete = () => {
    // Your delete logic here, for example:
    console.log("Item deleted:", currentAction.id);
    handleActionChange(null, null); // Reset the action after deleting
  };

  // Component mapping based on the action
  const renderActionComponent = () => {
    switch (currentAction.action) {
      case "viewDescription":
        return (
          <ProjectDescriptionComponent
            handleActionChange={handleActionChange}
            id={currentAction.id}
          />
        );
      case "viewStatus":
        return (
          <ProjectStatusComponent
            handleActionChange={handleActionChange}
            id={currentAction.id}
          />
        );
      case "viewTechnologies":
        return (
          <TechnologiesDescriptionComponent
            handleActionChange={handleActionChange}
            id={currentAction.id}
          />
        );
      case "viewBug":
        return (
          <BugDescriptionComponent
            handleActionChange={handleActionChange}
            id={currentAction.id}
          />
        );
      case "edit":
        return Navigate(`/form/${currentAction.id}`);
      case "delete":
        return (
          <DeleteComponent
            handleActionChange={handleActionChange}
            itemName={currentAction.itemName}
            onDelete={handleDelete}
            id={currentAction.id}
          />
        );
      case "startDate":
        return (
          <StartComponent
            handleActionChange={handleActionChange}
            id={currentAction.id}
          />
        );
      case "EndDate":
        return (
          <EndDateComponent
            handleActionChange={handleActionChange}
            id={currentAction.id}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full bg-[#CEECCA] relative">
      <div className="flex flex-row justify-between px-16 pt-4 items-center">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Button title="Create Note" type="text" link="/form" />
      </div>
      <div className="flex justify-center mt-9 pb-9">
        <ProjectTable handleActionChange={handleActionChange} />
      </div>

      {/* Component rendering based on the selected action */}
      {currentAction.action != null ? (
        <div className="flex justify-center items-center w-full min-h-screen absolute top-5">
          {renderActionComponent()}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default UserList;
