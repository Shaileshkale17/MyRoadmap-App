import React from "react";

const InputBox = ({ id, label, type, setInputValue, InputValue }) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label htmlFor={id} className="text-lg">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className="rounded-lg w-[21rem] p-2"
        onChange={(e) => setInputValue(e.target.value)}
        value={InputValue}
      />
    </div>
  );
};

export default InputBox;
