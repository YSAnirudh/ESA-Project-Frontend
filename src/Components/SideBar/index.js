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
import {
  homeStart,
  history,
  account,
  login,
  signup,
} from '../../Constants/RouteInfo';

const SideBar = ({isOpen, toggle, isLogin}) => {
  function WhichPage(props) {
    const IsLogin = props.IsLogin;
    if (IsLogin) {
      return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <SideBarWrapper>
            <SideBarBtnWrap>
              <SideBarRoute to={login}>Login</SideBarRoute>
            </SideBarBtnWrap>

            <SideBarBtnWrap>
              <SideBarRoute to={signup}>SignUp</SideBarRoute>
            </SideBarBtnWrap>
          </SideBarWrapper>
        </SideBarContainer>
      );
    }
    return (
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
    );
  }

  return <WhichPage IsLogin={isLogin} />;
};

export default SideBar;
