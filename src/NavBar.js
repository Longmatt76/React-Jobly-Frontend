import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";


function NavBar() {
  return (
    <div>
   <nav>
   <NavLink id="title" to='/'>Jobly</NavLink>
   <div className="links">
   <NavLink to='/companies'>Companies</NavLink>
   <NavLink to='/jobs'>Jobs</NavLink>
   <NavLink to='/profile'>Profile</NavLink>
   </div>
   </nav>
    </div>
  );
}

export default NavBar;