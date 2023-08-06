import React, { useState, useContext} from "react";
import { useNavigate} from "react-router-dom";
import UserContext from "./UserContext";

const Profile = ({editProfile}) => {

  const currentUser = useContext(UserContext);  

  const navigate = useNavigate();

  const INITIALSTATE = {
    username: `${currentUser.username}`,
    firstName: `${currentUser.firstName}`,
    lastName: `${currentUser.lastName}`,
    email:`${currentUser.email}`
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
     const {username, ...updatedData} = formData
     await editProfile(username, updatedData);
     setFormData(INITIALSTATE);
     navigate('/');
  }

  return (
    <div>
      <h1 className="loginFormH3">Edit Profile</h1>
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
          disabled
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

export default Profile; 