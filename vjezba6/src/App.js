import React from "react";
import { render } from "react-dom";
import Details from "./Details";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<SearchParams />} />
          <Route path="/details/:type/:subType/:productName" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartProvider>
  );
};

render(<App />, document.getElementById("root"));
