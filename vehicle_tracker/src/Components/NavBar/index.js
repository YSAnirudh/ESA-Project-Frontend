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
import {homeStart, history, account} from '../../Constants/RouteInfo';
//import {IoPerson} from 'react-icons/io5';

function NavBar({toggle}) {
  return (
    <>
      <Nav>
        <NavContainter>
          <NavLogo exact activeClassName="activeClass" to="/">
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
    </>
  );
}

export default NavBar;
