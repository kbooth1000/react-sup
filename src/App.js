import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import Main from './Main';
import TopNav from './TopNav';

let App = () => <Router>
    <div className="container">
      <TopNav className="topNav" />
      <Main className="main" />
    </div>
  </Router>;

export default App