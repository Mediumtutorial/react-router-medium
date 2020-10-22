import React from 'react'
import {Link} from 'react-router-dom'

export default function header() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user">User</Link></li>
               
            </ul>
        </>
    )
}
