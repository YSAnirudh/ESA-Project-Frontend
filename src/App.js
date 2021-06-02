import './App.css';
import React, {useState} from 'react';
import Start from './Screens/GetStarted';
import LoginHome from './Screens/LoginHome';
import {Route, Switch, useHistory} from 'react-router-dom';
import {homeAfterLogin} from './Constants/RouteInfo';
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar';
function App(props) {
  const [isLogin, setIsLogin] = useState(false);

  const updateisLogin = () => {
    setIsLogin(!isLogin);
  };

  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = () => {
    setIsOpen(!isOpen);
  };
  const renderLogin = () => {
    if (isLogin) {
      return (
        <LoginHome
          isLogin={isLogin}
          updateIsOpen={updateIsOpen}
          isOpen={isOpen}
          updateIsLogin={updateisLogin}
        />
      );
    } else {
      return (
        <Start
          isLogin={isLogin}
          updateIsOpen={updateIsOpen}
          isOpen={isOpen}
          updateIsLogin={updateisLogin}
        />
      );
    }
  };

  return <>{renderLogin()}</>;
}

export default App;
