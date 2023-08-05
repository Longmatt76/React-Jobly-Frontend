import React, {useContext} from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";



function NavBar({logOut}) {

  const currentUser = useContext(UserContext)

  return (
    <div>
      <nav>
        <div className="linkDiv">
          <NavLink id="title" to="/">
            Jobly
          </NavLink>

          {currentUser ? (
            <>
              <div className="links">
                <NavLink to="/companies">Companies</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/profile">Profile</NavLink>
              </div>
            </>
          ) : null}
        </div>

        {!currentUser ? (
          <div className="authLinks">
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>{" "}
            </div>
        ) : <NavLink onClick={logOut} className='logout' to='/'>Logout</NavLink>}
      </nav>
    </div>
  );
}
export default NavBar;