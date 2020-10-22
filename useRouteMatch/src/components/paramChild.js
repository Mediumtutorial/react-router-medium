import React from 'react'
import {useParams} from 'react-router-dom'

function ParamChild() {
    const { userID, id } = useParams();
    return (
        <>
         <h3>I am {userID} page inside {id} page</h3>
        </>
    )
}

export default ParamChild