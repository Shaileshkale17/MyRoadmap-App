import React from "react";

const Heading = ({ Title, font, style }) => {
  return <h1 className={`text-3xl m-4 ${font} ${style}`}>{Title}</h1>;
};

export default Heading;
