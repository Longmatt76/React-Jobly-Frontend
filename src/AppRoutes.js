// AppRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import Profile from "./Profile";
import CatchAll404 from "./CatchAll404";
import CompanyDetails from "./CompanyDetails";

function AppRoutes({handleLogIn, handleSignUp, getUserInfo}) {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm handleLogIn={handleLogIn}/>} />
      <Route path="/signup" element={<SignUpForm  handleSignUp={handleSignUp}/>} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetails/>}/>
      <Route path="/jobs" element={<JobList />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<CatchAll404/>} /> 
    </Routes>
  );
}

export default AppRoutes;
