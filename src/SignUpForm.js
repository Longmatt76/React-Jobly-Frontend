import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({handleSignUp}) => {

  const navigate = useNavigate();

  const INITIALSTATE = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
  };

  const [formData, setFormData] = useState(INITIALSTATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((fdata) => ({
      ...fdata,
      [name]: value,
    }));
  };

  async function handleSubmit (e) {
     e.preventDefault();
     await handleSignUp(formData);
     setFormData(INITIALSTATE);
     navigate('/');
  }

  return (
    <div>
      <h1 className="loginFormH3">Sign Up</h1>
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
        <label className="loginLabel" htmlFor="password">
          Password
        </label>
        <input
          className="loginInput"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <label className="loginLabel" htmlFor="firstName">
          First Name
        </label>
        <input
          className="loginInput"
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <label className="loginLabel" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="loginInput"
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <label className="loginLabelEmail" htmlFor="email">
          Email
        </label>
        <input
          className="loginInput"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <button className="loginButton">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm; 