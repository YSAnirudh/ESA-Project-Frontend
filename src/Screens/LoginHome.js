import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import History from './History';
import Account from './Account';
import Error from './Error';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import {homeStart, login, signup} from '../Constants/RouteInfo';

export default function LoginHome() {
  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={updateIsOpen} isLogin={true} />
      <NavBar toggle={updateIsOpen} isLogin={true} />
      <Switch>
        <Route exact path="/" />
        <Route
          exact
          path={homeStart}
          component={() => <Home path={homeStart} />}
        />
        <Route exact path={login} component={() => <History />} />
        <Route exact path={signup} component={() => <Account />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}
