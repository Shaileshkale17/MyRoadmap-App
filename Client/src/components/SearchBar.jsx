import React, { useState } from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    console.log("Search Term:", e.target.value);
  };

  return (
    <div className="flex items-center border border-black rounded-full px-4 py-2 bg-bodyColor w-96">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-gray-700 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
        <line
          x1="21"
          y1="21"
          x2="16.65"
          y2="16.65"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleInputChange}
        className="flex-grow bg-transparent focus:outline-none text-lg text-gray-700"
      />
    </div>
  );
};

export default SearchBar;
