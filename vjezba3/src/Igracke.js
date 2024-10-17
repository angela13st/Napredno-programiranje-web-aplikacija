import React from "react";

const Igracke = (props) => {
  return (
    <div>
      <h1> {props.naziv}</h1>
      <h2>{props.kategorija}</h2>
      <h3> {props.podkategorija}</h3>
    </div>
  );
};

export default Igracke;
