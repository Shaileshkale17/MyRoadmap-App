import React, { useState } from "react";
import X from "../assets/Vector (8).svg";
import SelectBox from "./selectBox";
import Button from "./Button";
import InputBox from "./InputBox";

const EndDateComponent = ({ handleActionChange, id }) => {
  const [End_Date, setEnd_Date] = useState("");
  console.log("EndComponent called with " + End_Date);

  const UPdateBugSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    console.log("update Bug Submit");
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
      <div
        className={`h-[18rem] w-[30rem] bg-bodyColor border border-solid  border-bodyColor relative rounded-md`}>
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
          <form onSubmit={UPdateBugSubmit} className="flex flex-col gap-8">
            <InputBox
              label="End Date"
              id="End_Date"
              type="Date"
              setInputValue={setEnd_Date}
              InputValue={End_Date}
            />
            <div className="flex gap-6 items-center justify-center">
              <Button title="Submit" type="submit" key={1} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EndDateComponent;
