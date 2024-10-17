import React from "react";
import { render } from "react-dom";
import Details from "./Details";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchParams />} />
        <Route path="/:type/:subType/details/:productName" element={<Details />} />
      </Routes>
    </Router>
  );
};

//render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById("root"));
