import "./LoginForm.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = ({handleLogIn}) => {

const navigate = useNavigate();

const INITIALSTATE = { 
username: "",
password: ""};

const [formData, setFormData] = useState(INITIALSTATE);

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value,
    }));
  };

const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogIn(formData);
    setFormData(INITIALSTATE);
    navigate('/');
}

  return (
    <div>
      <h1 className="loginFormH3">Log In</h1>
      <form onSubmit={handleSubmit} className="loginForm">
        <label className="loginLabel" htmlFor="username">
          Username
        </label>
        <input
          className="loginInput"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <label className="loginLabel">Password</label>
        <input
          className="loginInput"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit" className="loginButton">Submit</button>
      </form>
    </div>
  );
};

export default LoginForm;
