import React, { useState, useEffect, Fragment, useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './context/AuthContext';

function App() {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <Fragment>
      <MainHeader />
      <main>
        {!isLoggedIn && <Login />}
        {isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
