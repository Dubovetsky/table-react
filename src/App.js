import React from 'react';
import Header from './components/Header/HeaderContainer';
import Body from './components/Body/BodyContainer';
import './App.css';

const App = (props) => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>

  );
}

export default App;
