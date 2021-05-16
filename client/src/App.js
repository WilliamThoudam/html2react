import React, { Fragment } from 'react';
//import './App.css';
import './assets/css/bootstrap.min.css';
import './assets/css/LineIcons.css';
import './assets/css/magnific-popup.css';
import './assets/css/default.css';
import './assets/css/style.css';

import Header from './components/layout/Header';
import Middle from './components/layout/Middle';
import Footer from './components/layout/Footer';

const App = () => (
  <Fragment>
    <Header />
    <Middle />
    <Footer />
  </Fragment>
);

export default App;
