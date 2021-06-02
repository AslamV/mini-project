import React from 'react'
import FeatureCard from './FeatureCard'
import Secure from '../../utils/cyber-security.svg'
import Globe from '../../utils/globe.svg'
import Fast from '../../utils/fast-time.svg'
import Unlimited from '../../utils/forever.svg'
function Features() {
    return (
        <div className='flex flex-col items-center justify-center mb-9'>
            <h1 className='font-body text-4xl mt-9 font-bold mb-9'>Features</h1>
            <div className='flex flex-row'>
                <FeatureCard imgSrc={Secure} title='Secure' para='we secure your system from virus and ensure your personal data is safe'/>
                <FeatureCard imgSrc={Globe} title='Web-based App' para='No need to download and install it, it happens right in your browser'/>
                <FeatureCard imgSrc={Fast} title='Fast and Easy' para='This website is the fast and easy way to download and save any YouTube video to MP3 or MP4. '/>
                <FeatureCard imgSrc={Unlimited} title='Filtering' para='We can filter the explicit content in the given video'/>
            </div>
        </div>
    )
}

export default Features
