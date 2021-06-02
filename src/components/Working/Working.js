import React from 'react'
import Cloud from '../../utils/cloud-computing.png'
import Trans from '../../utils/translation.png'
import RenderVideo from '../../utils/video-editing.png'
import WorkBar from './WorkBar'
import {ArrowRightIcon} from '@heroicons/react/outline'
import './work.css'
function Working() {
    return (
        <div className='flex flex-col justify-center items-center mt-9'>
            <h1 className='text-4xl font-body font-semibold'>How It Works</h1>
            <div className='flex flex-row justify-around items-center mt-9 mb-9 workCont'>
                <WorkBar imgSrc={Cloud} title='Uploading Video' />
                <ArrowRightIcon className='h-12 w-12'/>
                <WorkBar imgSrc={Trans} title='Select Language'/>
                <ArrowRightIcon className='h-12 w-12'/>
                <WorkBar imgSrc={RenderVideo} title='Render Video'/>
            </div>
        </div>
    )
}

export default Working

