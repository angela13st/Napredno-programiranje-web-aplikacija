import React from "react";
import Igracke from "./Igracke";

const Result = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <Igracke name={item.name} />
      ))}
    </div>
  );
};

export default Result;
