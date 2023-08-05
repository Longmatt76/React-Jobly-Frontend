import React, {useState, useEffect} from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import AppRoutes from "./AppRoutes";
import JoblyApi from "./api";
import jwt from 'jsonwebtoken';
import UserContext from "./UserContext";



function App() {

  const [token, setToken] = useState();
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

 

  return (
    <div className="App">
      <BrowserRouter>
      <UserContext.Provider value={currentUser}>
        <NavBar logOut={logOut}/>
        <AppRoutes
         handleLogIn={handleLogIn}
         handleSignUp={handleSignUp}/>
         </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
