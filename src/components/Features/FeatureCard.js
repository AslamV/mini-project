import React from 'react'
import './ft.css'
function FeatureCard({imgSrc,title,para}) {
    return (
        <div className='ftCard'>
            <img src={imgSrc} height='70px' width='70px' className='ftImg'/>
            <h1 className='font-body text-2xl font-semibold mt-2 mb-2'>{title}</h1>
            <p className='font-body text-base text-gray-400'>
                {para}
            </p>
        </div>
    )
}

export default FeatureCard
