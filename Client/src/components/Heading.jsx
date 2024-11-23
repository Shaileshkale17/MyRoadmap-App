import React from "react";

const Heading = ({ Title, font }) => {
  return <h1 className={`text-3xl m-4 ${font}`}>{Title}</h1>;
};

export default Heading;
