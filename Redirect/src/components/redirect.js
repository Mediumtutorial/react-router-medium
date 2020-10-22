import React from 'react'
import {Redirect, useLocation} from 'react-router-dom'

function RedirectComponent() {
 const currentLocation = useLocation().pathname
 const search = useLocation().search
 const state = useLocation().state
    return (
        <>
           <Redirect
  to={{
    pathname: "/login",
    search: "?utm=your+face",
    state: { referrer: currentLocation }
  }}
/>

<p>Current Location is {currentLocation}</p>
<p>Search Parameter is {search}</p>
<p>State is {JSON.stringify(state)}</p>

        </>
    )
}

export default RedirectComponent