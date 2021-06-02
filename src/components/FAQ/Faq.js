import React from 'react'
import FaqCard from './FaqCard'
import './faq.css'

function Faq() {
    return (
        <div className='flex flex-col items-center justify-center mt-10'>
            <h1 className='font-body text-4xl font-semibold'>Frequently Asked Questions</h1>
            <div className='accordion'>
            <FaqCard qp='What is Trans Video ?' ans='Trans Video is a platform where you can translate your videos in to specific languages'/>
            <FaqCard qp='What only few top of lines of language is being translated ?' ans='If you are using Google translator, then this is a known limitation. The Google translator widget only translates the visible content on the page. So, just scroll through all the subtitles lines, and make sure all the subtitles are translated before you download the file. Or you can also click on the new "Translate" button at top to let the page auto do this for.'/>
            <FaqCard qp='How can i upload video files ?' ans='You can actually upload video files from your system to this application'/>
            <FaqCard qp='Is it really free ?' ans='Yes this application is completely free of cost.'/>
            </div>
        </div>
    )
}

export default Faq
