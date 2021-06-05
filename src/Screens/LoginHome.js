import React from 'react';
import {Route} from 'react-router-dom';

import NavBar from '../Components/NavBar';
import SideBar from '../Components/SideBar';
import Landing from '../Components/layout';
import Register from '../Components/auth/Register';
import Login from '../Components/auth/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/jquery/dist/jquery.min.js';

export default function LoginHome({isOpen, updateIsOpen, isLogin, setIsLogin}) {
  return (
    <>
      <SideBar isOpen={isOpen} toggle={updateIsOpen} isLogin={isLogin} />
      <NavBar toggle={updateIsOpen} isLogin={isLogin} setHomeStart={false} />
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} setIsLogin={setIsLogin} />}
        />
      </div>
    </>
  );
}
