import React from "react";
import { useDispatch } from "react-redux";
import { deleteProject } from "../features/projectsSlice";

const DeleteComponent = ({ handleActionChange, itemName, itemId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProject(itemId)); // Dispatch delete action with the item's ID
    console.log(`Item with ID ${itemId} deleted`);
    handleActionChange(null, null); // Close the modal
  };

  return (
    <div>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-bodyColor text-black p-4 rounded shadow-lg w-96">
          <h3 className="text-lg font-semibold">
            Are you sure you want to delete {itemName}?
          </h3>
          <div className="flex justify-end gap-4 mt-4">
            <button
              onClick={() => handleActionChange(null, null)}
              className="bg-gray-300 text-black p-2 rounded">
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white p-2 rounded">
              Confirm Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteComponent;
