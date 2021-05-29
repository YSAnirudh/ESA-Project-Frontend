import React, {useState} from 'react';
import '../App.css';
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
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
  login,
} from '../Constants/RouteInfo';
import {PageContainer} from './Elements/HomeElem';
import Maps from '../Components/Map';
import BackVid from '../Components/BackVideo';
import Payment from './Payment';
import HomeStart from './HomeComponents/HomeStart';
import HomeRide from './HomeComponents/HomeRide';
import HomeRiding from './HomeComponents/HomeRiding';

function Start({isOpen, updateIsOpen, isLogin}) {
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
  const [isMapOpen, setIsMapOpen] = useState(false);

  const toggle = () => {
    setIsMapOpen(!isMapOpen);
  };
  return (
    <>
      <SideBar isOpen={isOpen} toggle={updateIsOpen} isLogin={false} />
      <NavBar toggle={updateIsOpen} isLogin={isLogin} />
      <Switch>
        <Route exact path={homeAfterLogin} />
        <Route
          exact
          path={login}
          render={() => {
            return <Redirect to={homeAfterLogin} />;
          }}
        />
        <Route
          exact
          path={homeStart}
          component={() => (
            <PageContainer>
              {isMapOpen ? (
                <Maps isMapVisible={isMapOpen} toggleMap={toggle} />
              ) : (
                <>
                  <BackVid />
                  <HomeStart isMapVisible={isMapOpen} toggleMap={toggle} />
                </>
              )}
            </PageContainer>
          )}
        />
        <Route
          exact
          path={homeRide}
          component={() => (
            <PageContainer>
              <BackVid />
              <HomeRide />
            </PageContainer>
          )}
        />
        <Route
          exact
          path={homeRiding}
          component={() => (
            <PageContainer>
              <BackVid />
              <HomeRiding />
            </PageContainer>
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
