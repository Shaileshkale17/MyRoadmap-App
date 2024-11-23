import React from "react";

const SelectBox = ({ id, label, setInputValue, InputValue, options = [] }) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <select
        id={id}
        value={InputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="rounded-lg w-[21rem] p-2 border border-solid border-black">
        {options.map((option) => (
          <option key={option.value} value={option.value} className="h-36">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
