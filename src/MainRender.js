import React, {useState, useEffect} from 'react';
import Start from './Screens/GetStarted';
import LoginHome from './Screens/LoginHome';
import usePersistedState from './persistedState';

function MainRender() {
  const [isOpen, setIsOpen] = useState(false);
  const updateIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const [isLogin, setIsLogin] = usePersistedState('isLogin', true);
  const setLogin = (bool) => {
    setIsLogin(bool);
  };
  const renderLogin = () => {
    if (isLogin) {
      return (
        <LoginHome
          isLogin={isLogin}
          updateIsOpen={updateIsOpen}
          isOpen={isOpen}
          setIsLogin={setLogin}
        />
      );
    } else {
      return (
        <Start
          isLogin={isLogin}
          updateIsOpen={updateIsOpen}
          isOpen={isOpen}
          setIsLogin={setLogin}
        />
      );
    }
  };

  return <>{renderLogin()}</>;
}

export default MainRender;
