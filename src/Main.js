import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SupList from './SupList';
import AuthorList from './AuthorList';
import AuthorProfile from './AuthorProfile';

let Main = () =>
    <div>
        <Switch>
            <Route path="/list" component={SupList} />
            <Route exact path="/users" component={AuthorList} />
            <Route exact path="/user/:author" component={AuthorProfile} />
        </Switch>
  </div>;

  export default Main