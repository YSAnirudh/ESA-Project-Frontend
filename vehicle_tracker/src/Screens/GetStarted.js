import '../App.css';
import logo from '../logo.svg';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import History from './History';
import Account from './Account';
import Error from './Error';
import NavBar from '../Components/NavBar';
import Map from '../Components/Map';

function Start() {
  const props = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/home" component={() => <Home />} />
        <Route exact path="/history" component={() => <History />} />
        <Route exact path="/account" component={() => <Account />} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default Start;
