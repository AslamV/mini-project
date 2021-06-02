import React from 'react'
import SutitleBox from './SutitleBox'
import {formatTimestamp} from 'subtitle'
import './translate.css'
import { Button } from '@material-ui/core'
function SubBox({data,getSegmented,undoSegmented,tran,title}) {
    return (
        <div className="transcript">
            <h1 className='font-body text-2xl font-semibold py-2 mx-4'>{title}</h1>
                
            <div className={tran ? `flex flex-row items-center justify-start pl-4` : `flex flex-row items-center justify-start pl-4 invisible`}>
                <button onClick={getSegmented} className='sBtn font-body'>Segment</button>
                <button onClick={undoSegmented} className='sBtnn font-body ml-2'>Undo Segment</button>
            </div>
            
            
            <div className="transcript-box flex flex-col justify-start mx-4 my-2">
                {data.map((dt) => (
                    <SutitleBox key={dt.id} sTime={dt.start} eTime={dt.end} content={dt.text}/>
                ))}
            </div>
        </div>
    )
}

export default SubBox
