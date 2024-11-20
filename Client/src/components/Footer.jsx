import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="text-center h-auto p-3 bg-[#62825D] text-white">
      <p>
        All Copyright Reserved By ©{" "}
        <Link to="https://protfolio-shailesh-full-stack-developer.vercel.app/">
          Shailesh kale
        </Link>
      </p>
    </div>
  );
};

export default Footer;
