import React from 'react';
import {
  Nav,
  NavContainter,
  NavLogo,
  NavItem,
  NavMenu,
  NavLinks,
  MobileIcon,
} from './NavElem';
import {FaBars} from 'react-icons/fa';
import {
  homeStart,
  history,
  account,
  login,
  register,
  homeAfterLogin,
  root,
} from '../../Constants/RouteInfo';
//import {IoPerson} from 'react-icons/io5';

function NavBar({toggle, isLogin, setHomeStart}) {
  function WhichPage(props) {
    const IsLogin = props.IsLogin;
    if (IsLogin) {
      return (
        <Nav>
          <NavContainter>
            <NavLogo exact activeClassName="activeClass" to={root}>
              AppName
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLinks to={login}>Login</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to={register}>Register</NavLinks>
              </NavItem>
            </NavMenu>
          </NavContainter>
        </Nav>
      );
    }
    return (
      <Nav>
        <NavContainter>
          <NavLogo exact activeClassName="activeClass" to={homeAfterLogin}>
            AppName
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to={homeStart}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={history}>History</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to={account}>
                {/* <IoPerson fontSize={25} /> */}
                Account
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavContainter>
      </Nav>
    );
  }

  return <WhichPage IsLogin={isLogin} />;
}

export default NavBar;
