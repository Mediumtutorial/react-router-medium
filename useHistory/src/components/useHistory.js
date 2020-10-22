import React from 'react'
import {useHistory} from 'react-router-dom'

function UseHistory() {
   const history = useHistory()
    return (
        <>
            <button onClick={() => {history.goBack()}}>Go Back</button>
            <button onClick={() => {history.push('/')}}>Push to home</button>
        </>
    )
}

export default UseHistory