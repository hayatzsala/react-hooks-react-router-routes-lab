import React from "react";
import { NavLink, Route } from "react-router-dom";
import Actors from "./Actors";
import Directors from "./Directors";

function NavBar() {
  return <div className="navbar">
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/movies'>Movies</NavLink>
    <NavLink to='/directors'>Directors</NavLink>
    <NavLink to='/actors'>Actors</NavLink>
      </div>;
}

export default NavBar;
