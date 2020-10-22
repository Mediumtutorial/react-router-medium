import React from 'react'
import {useRouteMatch, Link, Switch, Route} from 'react-router-dom'
import ParamChild from './paramChild'

function RouteMatch() {
    const {path, url} = useRouteMatch();

    
    return (
        <>
          <ul>
            <li><Link to={`${url}/info`}>Info</Link></li>
            <li><Link to={`${url}/profile`}>Profile</Link></li>
            <li><Link to={`${url}/account`}>Account</Link></li>
          </ul>
          <Switch>
             <Route exact path={path}>
             </Route>
              <Route path={`${path}/:userID`}>
                <ParamChild/>
              </Route>
          </Switch>
        </>
    )
}

export default RouteMatch