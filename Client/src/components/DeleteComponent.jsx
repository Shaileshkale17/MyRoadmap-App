import React, { useState } from "react";

const DeleteComponent = ({ handleActionChange, itemName, onDelete }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleDelete = () => {
    onDelete();
    setIsVisible(false);
    handleActionChange(null, null); // Hide the confirmation modal after deleting
  };

  console.log(handleActionChange);
  return (
    <div>
      {isVisible && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded shadow-lg w-96">
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
      )}
    </div>
  );
};

export default DeleteComponent;
