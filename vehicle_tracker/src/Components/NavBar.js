import React from 'react';
import {NavLink} from 'react-router-dom';

function NavBar() {
  return (
    <>
      <div className="nav_bar">
        <NavLink exact activeClassName="activeClass" to="/">
          Root
        </NavLink>
        <NavLink exact activeClassName="activeClass" to="/home">
          Home
        </NavLink>
        <NavLink exact activeClassName="activeClass" to="/history">
          History
        </NavLink>
        <NavLink exact activeClassName="activeClass" to="/account">
          Account
        </NavLink>
      </div>
    </>
  );
}

export default NavBar;
