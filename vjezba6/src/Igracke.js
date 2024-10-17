import React from "react";
import { Link } from "react-router-dom";

const Igracke = (props) => {
  return (
    <div>
      <Link to={`/details/${props.igrackaType}/${props.subType}/${props.id}`}>
        <h1>{props.name}</h1>
      </Link>
    </div>
  );
};

export default Igracke;
