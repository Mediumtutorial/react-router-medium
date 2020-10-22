import React from 'react'
import {Link} from 'react-router-dom'

export default function header() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/user?manntrix">User</Link></li>
                <li><Link to="/dashboard#widget">Dashboard</Link></li>
                <li><Link to="/service?webdesign#UI">Service</Link></li>
            </ul>
        </>
    )
}
