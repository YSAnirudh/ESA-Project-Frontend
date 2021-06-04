import './App.css';
import React, {useState} from 'react';
import Start from './Screens/GetStarted';
import LoginHome from './Screens/LoginHome';
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const updateIsOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(localStorage.getItem('isLogin'));
  const [isLogin, setIsLogin] = useState(
    localStorage.getItem('isLogin') == 'false' ? false : true
  );

  localStorage.setItem('isLogin', 'true');
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

export default App;
