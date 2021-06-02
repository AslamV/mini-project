import React from 'react'

function WorkBar({imgSrc,title}) {
    return (
        <div className='flex flex-col'>
            <img height='150px' width='150px' src={imgSrc}/>
            <h1 className='font-body text-2xl font-bold text-blue-700 mt-2'>{title}</h1>
        </div>
    )
}

export default WorkBar
