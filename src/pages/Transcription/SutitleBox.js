import React from 'react'
import './translate.css'
function SutitleBox({sTime,eTime,content}) {
    return (
        <div className="sub-box flex flex-col my-2 px-2 py-1 rounded-lg justify-center">
                <div className="time-box flex flex-row">
                            <span className=' text-sm text-gray-400 font-body'>{sTime}</span>
                            <span className='mx-2 text-gray-400 font-body text-sm'>-</span>
                            <span className='text-sm text-gray-400 font-body'>{eTime}</span>
                </div>
                <div className='cont-box'>
                <textarea className='text-sm font-body font-normal p-1'  defaultValue={content}/>
            </div>
        </div>
    )
}

export default SutitleBox
