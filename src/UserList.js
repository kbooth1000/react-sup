import React from 'react';
import UserScreen from './UserScreen';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import ReactDOM from 'react-dom';
import SupsAPI from './sups-api';

let Homepage = () => <h1>Users:</h1>

let UserList = () => {

  let renderAuthorList = () => {
    let authors = [];
    SupsAPI.sups.forEach(sup => {
      authors.push(sup.author);
    });

    let filteredAuthors = authors.filter((elem, pos, arr) => {
      return arr.indexOf(elem) === pos;
    });
    return (filteredAuthors.map(author =>
      <h3 key={author}><NavLink to={'/user/'+author} > {author} </NavLink></h3>
    )
    )
  }

  let UsersNavbar = () =>
    <div><br /><br />
      {renderAuthorList()}
    </div>


  return <section>
    <div> 
      <UsersNavbar />
      <NavLink to="/list">All Sups!</NavLink>
      {/* <Route path="/user/:author" component={UserScreen} /> */}
    </div>
  </section>
}


export default UserList