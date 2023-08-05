import React, { useContext } from "react";
import {Outlet, Navigate} from 'react-router-dom';
import UserContext from "./UserContext";

const ProtectedRoutes = () => {

const currentUser = useContext(UserContext);

return(
    currentUser ? <Outlet/> : <Navigate to="/login"/>)
};

export default ProtectedRoutes; 