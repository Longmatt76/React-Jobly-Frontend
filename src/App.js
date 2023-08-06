import React, {useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import JoblyApi from "./api";
import jwt from 'jsonwebtoken';
import UserContext from "./UserContext";
import useLocalStorage from "./hooks/useLocalStorage";



function App() {

  const [token, setToken] = useLocalStorage('token');
  const [currentUser, setCurrentUser] = useState();
  const [applicationIDs, setApplicationIDs] = useState([]);
  

 useEffect(
   function loadUser() {
     async function getUserInfo() {
       if (token) {
         let { username } = jwt.decode(token);
         JoblyApi.token = token;
         let currentUser = await JoblyApi.getUser(username);
         setCurrentUser(currentUser);
       }
     }
     getUserInfo();
   },
   [token]
 );

  const logOut = () => {
    setCurrentUser(null);
    setToken(null);
  }


  async function handleLogIn (userData) {
    const userToken = await JoblyApi.loginUser(userData);
    JoblyApi.token = userToken;
    setToken(userToken);
    return userToken;
  };

  async function handleSignUp (userData) {
    const userToken = await JoblyApi.signupUser(userData);
    setToken(userToken);
    return userToken;
  }

  async function editProfile(currentUsername, updatedData) {
    const updatedUser = await JoblyApi.editUser(currentUsername, updatedData);
    setCurrentUser(updatedUser);
    return updatedUser;
  }


  async function apply (username, jobId) {
    const jobAppliedTo = await JoblyApi.applyToJob(username, jobId);
    setApplicationIDs([...applicationIDs, jobId]);
    return jobAppliedTo;
  }
 

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={{currentUser, applicationIDs, apply}}>
        <NavBar logOut={logOut}/>
        <AppRoutes
         handleLogIn={handleLogIn}
         handleSignUp={handleSignUp}
         editProfile={editProfile}/>
         </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
