import React, {useState} from 'react';
import '../App.css';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import History from './History';
import Account from './Account';
import Balance from './Balance';
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
  homeAfterLogin,
} from '../Constants/RouteInfo';
import Payment from './Payment';

function Start() {
  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const [isHomeStart, setIsHomeStart] = useState(true);

  const toggleHomeStart = () => {
    setIsHomeStart(!isHomeStart);
  };

  const [isHomeRide, setIsHomeRide] = useState(true);

  const toggleHomeRide = () => {
    setIsHomeRide(!isHomeRide);
  };

  const setToTrueHomeStart = () => {
    setIsHomeStart(true);
  };

  const bookinghist = [
    {
      name: 'Ride-1',
      startpoint: 'hyderabad',
      destination: 'Guntur',
      duration: 'Duration',
      fare: '1000 rs',
      date: '10-5-2020',
    },
    {
      name: 'Ride-2',
      startpoint: 'bellam',
      destination: 'paakam',
      duration: '1 sec',
      fare: '100 rs',
      date: '11-5-2020',
    },
    {
      name: 'Ride-2',
      startpoint: 'bellam',
      destination: 'paakam',
      duration: '1 sec',
      fare: '100 rs',
      date: '11-5-2020',
    },
    {
      name: 'Ride-2',
      startpoint: 'bellam',
      destination: 'paakam',
      duration: '1 sec',
      fare: '100 rs',
      date: '11-5-2020',
    },
  ];

  const profiledata = {
    email: 'abhinavaaa@gmail.com',
    username: 'raghus',
    phnumber: '7995948888',
  };

  return (
    <>
      <SideBar isOpen={isOpen} toggle={updateIsOpen} isLogin={false} />
      <NavBar
        toggle={updateIsOpen}
        isLogin={false}
        setHomeStart={setToTrueHomeStart}
      />
      <Switch>
        <Route exact path={homeAfterLogin} />
        <Route
          exact
          path={homeStart}
          component={() => (
            <Home
              isHomeRide={isHomeRide}
              isHomeStart={isHomeStart}
              toggleHomeRide={toggleHomeRide}
              toggleHomeStart={toggleHomeStart}
            />
          )}
        />
        <Route
          exact
          path={homeRide}
          component={() => (
            <Home
              isHomeRide={isHomeRide}
              isHomeStart={isHomeStart}
              toggleHomeRide={toggleHomeRide}
              toggleHomeStart={toggleHomeStart}
            />
          )}
        />
        <Route
          exact
          path={homeRiding}
          component={() => (
            <Home
              isHomeRide={isHomeRide}
              isHomeStart={isHomeStart}
              toggleHomeRide={toggleHomeRide}
              toggleHomeStart={toggleHomeStart}
            />
          )}
        />
        <Route
          exact
          path={history}
          component={() => <History info={bookinghist} />}
        />
        <Route
          exact
          path={account}
          component={() => <Account info={profiledata} />}
        />
        <Route exact path={payment} component={() => <Payment />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default Start;
