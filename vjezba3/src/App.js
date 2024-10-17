import React from "react";
import { render } from "react-dom";
import Igracke from "./Igracke";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      {/* <Movie name="LOTR" genre="SF" subgenre="Fantazy" />
      <Movie name="Matrix" genre="SF" subgenre="Action" />
      <Movie name="Jumanji" genre="Comedy" subgenre="Familie" />
      <Movie name="Purge" genre="Horror" subgenre="Thriller" /> */}
      <SearchParams />
    </div>
  );
};

//render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
