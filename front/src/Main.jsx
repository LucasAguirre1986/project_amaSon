import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';
import NavbarContainer from './containers/NavbarContainer'
import RegisterContainer from './containers/RegisterContainer'
import CategoryContainer from './containers/CategoryContainer'
import SearchContainer from './containers/SearchContainer'

export default () => (

  <div className="container-fluid">
    {/* NAV */}
    
    <Route component={NavbarContainer} />
    <Switch>
        <Route exact path='/' component={HomeContainer}/>
        <Route path='/categoria/:category' component={CategoryContainer}/>
        <Route path='/search/' component={SearchContainer}/>
        {/* ROUTES */}
        {/* <Redirect from="/" to="/notfound" /> */}
      </Switch>

    </div>
  )
;