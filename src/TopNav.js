import React from 'react';
import { NavLink } from 'react-router-dom';

let TopNav = () =>
  <div>
    <NavLink to="/">Home</NavLink><br /><br />
    <NavLink to="/list">All Sups!</NavLink>
    <div>
      <NavLink to="/users"> by User </NavLink><br />
    </div>
  </div>;

  export default TopNav