import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, type, link, style }) => {
  return (
    <>
      <Link to={link}>
        <button
          type={type}
          className={`px-10 py-2 bg-[#245869] rounded-xl border text-white text-base font-bold ${style}`}>
          {title}
        </button>
      </Link>
    </>
  );
};

export default Button;
