import React, { Fragment } from 'react';
import './App.css';

import GlobalStyle from './theme/globalStyle'

import NavBar from './components/displayWrappers/NavBar/NavBar'

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
    </Fragment>
  );
}

export default App;
