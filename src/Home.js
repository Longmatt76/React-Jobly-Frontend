import './Home.css';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import React, { useContext } from 'react';

const Home = () => {
  const currentUser = useContext(UserContext);
  return (
    <div className="home">
      <h1>Jobly</h1>
      <p>All the jobs in one convenient place.</p>
      <div className="buttonContainer">
        {!currentUser ? (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </>
        ) : (
          <h2 className='welcomeBack'>Welcome Back {currentUser.firstName}!</h2>
        )}
      </div>
    </div>
  );
};

export default Home;
