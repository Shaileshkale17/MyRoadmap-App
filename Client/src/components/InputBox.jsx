import React from "react";

const InputBox = ({
  id,
  label,
  type,
  setInputValue,
  InputValue,
  width = "md:w-[21rem]",
  lableStyle,
}) => {
  return (
    <div className="flex flex-col gap-1 items-start">
      <label htmlFor={id} className={`text-lg font-medium ${lableStyle}`}>
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        className={`rounded-lg ${width}  p-2 border border-solid border-black`}
        onChange={(e) => setInputValue(e.target.value)}
        value={InputValue}
      />
    </div>
  );
};

export default InputBox;
