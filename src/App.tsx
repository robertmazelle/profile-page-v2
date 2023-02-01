import React from 'react';
import './App.scss';
import { Outlet } from 'react-router-dom';
import NavigationHeader from './components/header/header';


function App() {

  return (
    <div className="App">
      <NavigationHeader></NavigationHeader>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
