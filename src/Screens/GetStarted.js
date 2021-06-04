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
import AfterLogin from '../Components/layout/afterlogin';
const geolib = require('geolib');

function Start({isOpen, updateIsOpen, isLogin, updateIsLogin, setIsLogin}) {
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
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
      body: JSON.stringify({userId: userId}),
    })
      .then((response) => response.json())
      .then((res) => {
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
    handleEditProfile(user, emailAdd, phone, lno);
    // backend post BIGNOO
  };
  const handleEditProfile = (userN, ema, phno, lno) => {
    fetch('http://localhost:5000/account/update', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        userId: userId,
        username: userN,
        email: ema,
        phoneNo: phno,
        licenseNo: lno,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  const [balance, setBalance] = useState(0);
  const handleGetBalance = () => {
    fetch('http://localhost:5000/wallet/balance', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId: userId}),
    })
      .then((response) => response.json())
      .then((res) => {
        setBalance(res.balance);
      })
      .catch((err) => console.log(err));
  };
  const setBal = (bal) => {
    setBalance(bal);
    // BIGNOO
  };

  const [bookingHistory, setBookingHistory] = useState([]);
  const handleGetHistory = () => {
    fetch('http://localhost:5000/details/history', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId: userId}),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setBookingHistory(res);
      })
      .catch((err) => console.log(err));
  };

  const [userCache, setUserCache] = useState([]);
  const handleGetUserCache = () => {
    fetch('http://localhost:5000/home/getCache', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId: userId}),
    })
      .then((response) => response.json())
      .then((res) => {
        console.log(res);
        setUserCache(res);
      })
      .catch((err) => console.log(err));
  };
  const [location, setLocation] = useState(['', [0, 0]]);
  const [vehicles, setVehicles] = useState([]);
  const [costStr, setCostStr] = useState('');
  const handleGetVehicles = (locat) => {
    fetch('http://localhost:5000/bike/getVehicles', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        startLocation: locat[0],
        userId: userId,
      }),
    })
      .then((response) => response.json())
      .then((res) => res)
      .then((veh) => {
        let vehic = [];
        for (var i = 0; i < veh['vehicles'].length; i++) {
          vehic.push(veh['vehicles'][i]['vehicleId']);
        }
        setVehicles(vehic);
        setCostStr(veh['cost']);
      })
      .catch((err) => console.log(err));
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

  const [vhNo, setVhNo] = useState(-1);

  useEffect(() => {
    handleGetLocations();
    getLocation();
    handleGetProfileData();
    handleGetBalance();
    handleGetHistory();
    handleGetUserCache();
  }, []);

  const [isRiding, setIsRiding] = useState(
    userCache.length == 0 ? false : true
  );
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
        <Route
          exact
          path={homeAfterLogin}
          component={() => (
            <AfterLogin
              username={profiledata.username}
              setIsLogin={setIsLogin}
            />
          )}
        />
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
                    getVehicles={handleGetVehicles}
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
              <HomeRide
                location={location}
                setIsRiding={setIsRiding}
                vehicles={vehicles}
                setVehNo={setVhNo}
                phoneNo={profiledata['phoneNo']}
                costStr={costStr}
                userId={userId}
              />
            </PageContainer>
          )}
        />
        <Route
          exact
          path={homeRiding}
          component={() => (
            <PageContainer>
              <BackVid />
              <HomeRiding
                location={location}
                setIsRiding={setIsRiding}
                userId={userId}
                vhNo={vhNo}
              />
            </PageContainer>
          )}
        />
        <Route
          exact
          path={history}
          component={() => (
            <>
              <History
                info={bookingHistory}
                handleGetHistory={handleGetHistory}
              />
            </>
          )}
        />
        <Route
          exact
          path={account}
          component={() => (
            <Account
              profiledata={profiledata}
              setProfileData={setProfData}
              handleGetProfileData={handleGetProfileData}
              userId={userId}
            />
          )}
        />
        <Route
          exact
          path={editProfile}
          component={() => (
            <EditAccount
              profiledata={profiledata}
              setProfileData={setProfData}
              userId={userId}
            />
          )}
        />

        <Route
          exact
          path={accountBalance}
          component={() => (
            <Balance
              balance={balance}
              setBalance={setBal}
              userId={userId}
              getBal={handleGetBalance}
            />
          )}
        />
        <Route exact path={payment} component={() => <Payment />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default Start;
