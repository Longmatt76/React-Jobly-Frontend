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
  

 useEffect(
   function loadUser() {
     async function getUserInfo() {
       if (token) {
         let { username } = jwt.decode(token);
         JoblyApi.token = token;
         let currentUser = await JoblyApi.getUser(username);
         console.log('CurrentUser:', currentUser);
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
    console.log('UserToken:', userToken)
    setToken(userToken);
    return userToken;
  };

  async function handleSignUp (userData) {
    const userToken = await JoblyApi.signupUser(userData);
    console.log(userToken);
    setToken(userToken);
    return userToken;
  }

  async function editProfile(currentUsername, updatedData) {
    const updatedUser = await JoblyApi.editUser(currentUsername, updatedData);
    console.log('Updated User:', updatedUser);
    setCurrentUser(updatedUser);
    return updatedUser;
  }
 

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={currentUser}>
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
