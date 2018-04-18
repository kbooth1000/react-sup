import React from 'react';
import SupList from './SupList';
import UserList from './UserList';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';



let Homepage = () => <h1>Homepage!</h1>
let Navbar = () =>
  <div>
    <NavLink to="/">Home</NavLink><br /><br/>
    <NavLink to="/list">All Sups!</NavLink>
     <div>
      <NavLink to="/users"> by User </NavLink><br/>
      </div> 
  </div>;

let App = () =>
  <section>
        <Router>
          <div>
            <Navbar />
            <Route path="/" exact component={Homepage} />
            <Route path="/list" component={SupList} />
            <Route exact path="/users" component={UserList} />
          </div>
        </Router>
  </section>

export default App