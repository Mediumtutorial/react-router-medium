import React from 'react'
import {useLocation} from 'react-router-dom'

function UseLocation() {
    const {pathname, search, hash} = useLocation()
    return (
        <>
        <p>The search parameter is : {search}</p>
        <p>The pathname is : {pathname}</p>
        <p>The hash is : {hash}</p>
        </>
    )
}

export default UseLocation