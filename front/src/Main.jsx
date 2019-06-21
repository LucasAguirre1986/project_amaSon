import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavbarContainer from './containers/NavbarContainer'
import RegisterContainer from './containers/RegisterContainer'
import Sidebar2Container from './containers/Sidebar2Container';
import CategoryContainer from './containers/CategoryContainer'
import SearchContainer from './containers/SearchContainer'
import UserListContainer from './containers/UserListContainer';

export default () => (

  <div className="container-fluid">
    {/* NAV */}
    
    <Route component={NavbarContainer} />
    <Switch>
        <Route exact path='/' component={HomeContainer}/>
        <Route path='/categoria/:category' component={CategoryContainer}/>
        <Route path='/search/' component={SearchContainer}/>
        <Route path='/users' component={UserListContainer}/>
        {/* ROUTES */}
        {/* <Redirect from="/" to="/notfound" /> */}
      </Switch>

    </div>
  )
;