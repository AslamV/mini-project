import React from 'react'
import {CircularProgress} from '@material-ui/core'
import './pr.css'
function ProgressWait({text}) {
    return (
        <div className='pCont flex flex-col items-center justify-center'>
            <CircularProgress color="secondary"/>
            <h1 className='font-body text-sm font-bold text-white mt-3'>{text}</h1>
        </div>
    )
}

export default ProgressWait
