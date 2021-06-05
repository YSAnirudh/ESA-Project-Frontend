import './App.css';
import React from 'react';
import MainRender from './MainRender';

function App() {
  window.onunload = () => {
    window.localStorage.clear();
  };
  return <MainRender />;
}

export default App;
