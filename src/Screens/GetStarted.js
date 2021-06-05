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
  homeRiding,
  homeAfterLogin,
  login,
  accountBalance,
  editProfile,
} from '../Constants/RouteInfo';
import {PageContainer} from './Elements/HomeElem';
import Maps from '../Components/Map';
import BackVid from '../Components/BackVideo';
import HomeStart from './HomeComponents/HomeStart';
import HomeRide from './HomeComponents/HomeRide';
import HomeRiding from './HomeComponents/HomeRiding';
import AfterLogin from '../Components/layout/afterlogin';

function Start({isOpen, updateIsOpen, isLogin, updateIsLogin, setIsLogin}) {
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  const [isMapOpen, setIsMapOpen] = useState(true);
  const toggle = () => {
    setIsMapOpen(!isMapOpen);
  };

  const [locations, setLocations] = useState([]);
  const handleGetLocations = React.useCallback(() => {
    fetch('http://jeldi.herokuapp.com/home/getRide', {
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
    })
      .then((response) => response.json())
      .then((res) => {
        setLocations(res.Locations);
      });
  }, []);

  const [profiledata, setProfileData] = useState({});
  const handleGetProfileData = React.useCallback(() => {
    fetch('http://jeldi.herokuapp.com/details/account', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId: userId}),
    })
      .then((response) => response.json())
      .then((res) => {
        setProfileData(res);
      })
      .catch((err) => console.log(err));
  }, []);
  const setProfData = (user, phone, emailAdd, lno) => {
    setProfileData({
      username: user,
      email: emailAdd,
      phoneNo: phone,
      licenseNo: lno,
    });
    // backend post BIGNOO
  };
  const handleEditProfile = React.useCallback((userN, ema, phno, lno) => {
    fetch('http://jeldi.herokuapp.com/account/update', {
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
  }, []);

  const [balance, setBalance] = useState(0);
  const handleGetBalance = React.useCallback(() => {
    fetch('http://jeldi.herokuapp.com/wallet/balance', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({userId: userId}),
    })
      .then((response) => response.json())
      .then((res) => {
        setBalance(res.balance);
      })
      .catch((err) => console.log(err));
  }, []);
  const setBal = (bal) => {
    setBalance(bal);
    // BIGNOO
  };

  const [bookingHistory, setBookingHistory] = useState([]);
  const handleGetHistory = React.useCallback(() => {
    fetch('http://jeldi.herokuapp.com/details/history', {
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
  }, []);

  const [userCache, setUserCache] = useState([]);
  const handleGetUserCache = React.useCallback(() => {
    fetch('http://jeldi.herokuapp.com/home/getCache', {
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
  }, []);
  const [location, setLocation] = useState(['', [0, 0]]);
  const [vehicles, setVehicles] = useState([]);
  const [costStr, setCostStr] = useState('');
  const handleGetVehicles = React.useCallback((locat) => {
    fetch('http://jeldi.herokuapp.com/bike/getVehicles', {
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
  }, []);

  const [userLoc, setUserLoc] = useState(userLoc);
  const successHandler = (position) => {
    setUserLoc([position.coords.latitude, position.coords.longitude]);
  };
  const errorHandler = (error) => console.error(error.message);
  const getLocation = () => {
    if (!userLoc) {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    }
  };

  const [vhNo, setVhNo] = useState(-1);

  useEffect(() => {
    handleGetLocations();
    getLocation();
    handleGetProfileData();
    handleGetBalance();
    handleGetHistory();
    handleGetUserCache();
    // calcNearestLocation(userLoc, location);
  }, [
    handleGetLocations,
    handleGetProfileData,
    handleGetBalance,
    handleGetUserCache,
    handleGetHistory,
  ]);

  const [isRiding, setIsRiding] = useState(
    userCache.length === 0 ? false : true
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
                    userLoc={userLoc}
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
                handleGetHistory={handleGetHistory}
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
              handleEditProfile={handleEditProfile}
              userId={userId}
              handleGetProfileData={handleGetProfileData}
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
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default Start;
