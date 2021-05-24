import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import History from './History';
import Account from './Account';
import Error from './Error';
import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import {
  dashboard,
  homeStart,
  login,
  register,
  root,
} from '../Constants/RouteInfo';

import Nave from '../Components/layout/Navbar';
import Landing from '../Components/layout/Landing';
import Register from '../Components/auth/Register';
import Login from '../Components/auth/Login';
import PrivateRoute from '../Components/private-route/PrivateRoute';
import Dashboard from '../Components/dashboard/Dashboard';
//import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken';

import {setCurrentUser, logoutUser} from '../actions/authActions';
import {Provider} from 'react-redux';
import store from '../store';

export default function LoginHome() {
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);
    // Decode token and get user info and exp
    const decoded = jwt_decode(token);
    // Set user and isAuthenticated
    store.dispatch(setCurrentUser(decoded));
    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds
    if (decoded.exp < currentTime) {
      // Logout user
      store.dispatch(logoutUser());

      // Redirect to login
      window.location.href = './login';
    }
  }

  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Provider store={store}>
        <SideBar isOpen={isOpen} toggle={updateIsOpen} isLogin={true} />
        <NavBar toggle={updateIsOpen} isLogin={true} />
        <Switch>
          <Route exact path={root} component={Landing} />
          <Route
            exact
            path={homeStart}
            component={() => <Home path={homeStart} />}
          />
          <Route exact path={login} component={() => <Login />} />
          <Route exact path={register} component={() => <Register />} />
          <PrivateRoute exact path={dashboard} component={Dashboard} />
          <Route component={Error} />
        </Switch>
      </Provider>
    </>
  );
}
