import React, {useState} from 'react';
import '../App.css';
import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import History from './History';
import Account from './Account';
import Balance from './Balance';
import EditAccount from './EditAccount';
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
  accountBalance,
  editProfile,
  backendEndpoint,
} from '../Constants/RouteInfo';
import {PageContainer} from './Elements/HomeElem';
import Maps from '../Components/Map';
import BackVid from '../Components/BackVideo';
import Payment from './Payment';
import HomeStart from './HomeComponents/HomeStart';
import HomeRide from './HomeComponents/HomeRide';
import HomeRiding from './HomeComponents/HomeRiding';
import {getLocations} from './MapAPICalls/Locations';

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
  const [isMapOpen, setIsMapOpen] = useState(true);

  const toggle = () => {
    setIsMapOpen(!isMapOpen);
  };

  const [location, setLocation] = useState(['', [0, 0]]);

  var locations = [
    ['Habsiguda', [17.400344025158084, 78.53896233520851]], // Habsiguda

    ['Secunderabad', [17.442501556334673, 78.49498901668164]], // Secunderabad

    ['Ameerpet', [17.43477857257373, 78.44565373814939]], // Ameerpet

    ['Kukatpally', [17.49593900920454, 78.39781262125594]], // Kukatpally

    ['Gachibowli', [17.439509293158775, 78.36117774001633]], // Gachibowli

    ['Miyapur', [17.49636148413489, 78.35840285354759]], // Miyapur

    ['BHEL', [17.495493340624552, 78.31758770358886]], //BHEL

    ['Bachupally', [17.541128272621126, 78.36287564255261]], // Bachupally

    ['Gandimaisamma', [17.57480682461022, 78.42459756604019]], // Gandimaisamma

    ['Jeedimetla', [17.507852515230798, 78.44794237948909]], // Jeedimetla
  ];

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
                <Maps
                  isMapVisible={isMapOpen}
                  toggleMap={toggle}
                  locations={locations}
                  setLocation={setLocation}
                />
              ) : (
                <>
                  <BackVid />
                  <HomeStart
                    isMapVisible={isMapOpen}
                    toggleMap={toggle}
                    locations={locations}
                    setLocation={setLocation}
                    location={location}
                  />
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
              <HomeRide location={location} />
            </PageContainer>
          )}
        />
        <Route
          exact
          path={homeRiding}
          component={() => (
            <PageContainer>
              <BackVid />
              <HomeRiding location={location} />
            </PageContainer>
          )}
        />
        <Route
          exact
          path={history}
          component={() => (
            <>
              <History info={bookinghist} />
            </>
          )}
        />
        <Route
          exact
          path={account}
          component={() => <Account info={profiledata} />}
        />
        <Route
          exact
          path={editProfile}
          component={() => <EditAccount info={profiledata} />}
        />

        <Route exact path={accountBalance} component={() => <Balance />} />
        <Route exact path={payment} component={() => <Payment />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default Start;
