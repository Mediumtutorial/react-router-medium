import React from 'react'
import {useParams} from 'react-router-dom'

function ParamChild() {
    const { id } = useParams();
    return (
        <>
         <h3>I am {id} page</h3>
        </>
    )
}

export default ParamChild