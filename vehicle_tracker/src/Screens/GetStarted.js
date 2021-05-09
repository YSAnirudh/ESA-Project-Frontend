import React, {useState} from 'react';
import '../App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import History from './History';
import Account from './Account';
import Error from './Error';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import {
  homeStart,
  history,
  account,
  homeRide,
  payment,
  homeRiding,
} from '../Constants/RouteInfo';
import Payment from './Payment';

function Start() {
  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={updateIsOpen} />
      <NavBar toggle={updateIsOpen} />
      <Switch>
        <Route exact path="/" />
        <Route
          exact
          path={homeStart}
          component={() => <Home path={homeStart} />}
        />
        <Route
          exact
          path={homeRide}
          component={() => <Home path={homeRide} />}
        />
        <Route
          exact
          path={homeRiding}
          component={() => <Home path={homeRiding} />}
        />
        <Route exact path={history} component={() => <History />} />
        <Route exact path={account} component={() => <Account />} />
        <Route exact path={payment} component={() => <Payment />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default Start;
