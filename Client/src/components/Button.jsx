import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, type, link }) => {
  return (
    <>
      <Link to={link}>
        <button
          type={type}
          className="px-10 py-2 bg-primaryColor rounded-xl border text-white text-base font-bold">
          {title}
        </button>
      </Link>
    </>
  );
};

export default Button;
