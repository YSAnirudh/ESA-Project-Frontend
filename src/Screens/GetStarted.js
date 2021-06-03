import React, {useState, useEffect} from 'react';
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
const geolib = require('geolib');

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

  const [isMapOpen, setIsMapOpen] = useState(true);
  const toggle = () => {
    setIsMapOpen(!isMapOpen);
  };

  const [locations, setLocations] = useState([]);
  const handleGetLocations = () => {
    fetch('http://localhost:5000/home/getRide', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((response) => response.json())
      .then((res) => {
        setLocations(res.Locations);
      });
  };

  const [profiledata, setProfileData] = useState({});
  const handleGetProfileData = () => {
    fetch('http://localhost:5000/details/account', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId: '95ff6bf5-a85b-4260-a503-ce983195ed93'}),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setProfileData(res);
      })
      .catch((err) => console.log(err));
  };
  const setProfData = (user, phone, emailAdd, lno) => {
    setProfileData({
      username: user,
      email: emailAdd,
      phoneNo: phone,
      licenseNo: lno,
    });
    // backend post
  };

  const [balance, setBalance] = useState(0);
  const handleGetBalance = () => {
    fetch('http://localhost:5000/wallet/balance', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId: '95ff6bf5-a85b-4260-a503-ce983195ed93'}),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res.balance);
        setBalance(res.balance);
      })
      .catch((err) => console.log(err));
  };
  const setBal = (bal) => {
    setBalance(bal);
  };

  const [userLoc, setUserLoc] = useState(userLoc);
  const successHandler = (position) => {
    setUserLoc([position.coords.latitude, position.coords.longitude]);
  };
  const errorHandler = (error) => console.error(error.message);
  const getLocation = (locats) => {
    if (!userLoc) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    }
  };

  const [nearestLocation, setNearestLocation] = useState('');
  const calcNearestLocation = (loca, locats) => {
    var min = 100000000000.0;
    var loc = '';
    for (var i = 0; i < locats.length; i++) {
      var dist = geolib.getDistance(
        {latitude: locats[i][1][0], longitude: locats[i][1][1]},
        {latitude: loca[0], longitude: loca[1]}
      );
      if (dist < min) {
        loc = locats[i][0];
        min = dist;
      } else {
        min = min;
      }
      console.log(loc);
    }
    setNearestLocation(loc);
    console.log(loc);
  };

  useEffect(() => {
    handleGetLocations();
    getLocation();
    handleGetProfileData();
    handleGetBalance();
  }, []);

  const [location, setLocation] = useState(['', [0, 0]]);
  const [isRiding, setIsRiding] = useState(false);
  return (
    <>
      <SideBar
        isOpen={isOpen}
        toggle={updateIsOpen}
        isLogin={false}
        isRiding={isRiding}
      />
      <NavBar toggle={updateIsOpen} isLogin={isLogin} isRiding={isRiding} />
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
                  userLoc={userLoc}
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
                    nearestLocation={nearestLocation}
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
              <HomeRide location={location} setIsRiding={setIsRiding} />
            </PageContainer>
          )}
        />
        <Route
          exact
          path={homeRiding}
          component={() => (
            <PageContainer>
              <BackVid />
              <HomeRiding location={location} setIsRiding={setIsRiding} />
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
          component={() => (
            <Account profiledata={profiledata} setProfileData={setProfData} />
          )}
        />
        <Route
          exact
          path={editProfile}
          component={() => (
            <EditAccount
              profiledata={profiledata}
              setProfileData={setProfData}
            />
          )}
        />

        <Route
          exact
          path={accountBalance}
          component={() => <Balance balance={balance} setBalance={setBal} />}
        />
        <Route exact path={payment} component={() => <Payment />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default Start;
