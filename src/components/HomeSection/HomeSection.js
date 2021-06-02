import React from 'react'
import { Link } from 'react-router-dom'
import './homi.css'
function HomeSection() {
    return (
    <div className='flex flex-col justify-center items-center mainCont'>
        <div className='titleCont'>
            <h1 className='font-body text-4xl'>Online Video Translator</h1>
            <p className='font-body text-lg'>Download videos from youtube in any languages</p>
        </div>
        <Link to='/upload'>
            <button className='tBtn font-body text-lg font-medium'>Get Started</button>
        </Link>
    </div>
    )
}

export default HomeSection
