import React from 'react';
import {
  CloseIcon,
  Icon,
  SideBarBtnWrap,
  SideBarContainer,
  SideBarLink,
  SideBarMenu,
  SideBarRoute,
  SideBarWrapper,
} from './SideElem';
import {homeStart, history, account} from '../../Constants/RouteInfo';

const SideBar = ({isOpen, toggle}) => {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to={homeStart} onClick={toggle}>
              Home
            </SideBarLink>
            <SideBarLink to={history} onClick={toggle}>
              History
            </SideBarLink>
            <SideBarLink to={account} onClick={toggle}>
              Account
            </SideBarLink>
          </SideBarMenu>
          <SideBarBtnWrap>
            <SideBarRoute to="/">Hello</SideBarRoute>
          </SideBarBtnWrap>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
};

export default SideBar;
