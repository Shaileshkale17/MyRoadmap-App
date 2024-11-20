import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, type, link }) => {
  return (
    <>
      <Link to={link}>
        <button
          type={type}
          className="px-10 py-2 bg-[#D9D9D9] rounded-xl border border-black">
          {title}
        </button>
      </Link>
    </>
  );
};

export default Button;
