import React from 'react';
import UserScreen from './UserScreen';
import {NavLink, Route } from 'react-router-dom';
import SupsAPI from './sups-api';

let UserList = (props) => {

  let renderAuthorList = () => {
    let authors = [];
    props.supData.forEach(sup => {
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
    {/* <Route path="/user/:author" component={UserScreen} /> */}
  </section>
}


export default UserList