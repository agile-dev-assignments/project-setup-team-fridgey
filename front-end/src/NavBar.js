import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

// NavBar from example project
// Links to every site we have
const NavBar = (props) => {
  return (
    <nav>
      <Link to="/">MyFridge</Link>
      <Link to="/ShoppingList">Shopping List</Link>
      <Link to="/Storage-Time-Search">Storage Time Search</Link>
      <Link to="/RecipesOfTheDay">Recommendations</Link>
      <Link to="/Login">Login</Link>
    </nav>
  );
};

export default NavBar;
