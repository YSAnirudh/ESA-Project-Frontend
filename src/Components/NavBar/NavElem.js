import styled from 'styled-components';
import {NavLink} from 'react-router-dom';
export const Nav = styled.nav`
  background: #000;
  height: 60px;
  //margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContainter = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  max-width: 1100px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(NavLink)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 650px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: -10px;
    margin-bottom: 100px;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-top: 2.2vh;
  margin-right: -22px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLinks = styled(NavLink)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1cm;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;
