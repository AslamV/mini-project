import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './search.css'
function Search() {
    const [query, setquery] = useState('')
    function youtube_parser(url){
        var regExp = /^https?\:\/\/(?:www\.youtube(?:\-nocookie)?\.com\/|m\.youtube\.com\/|youtube\.com\/)?(?:ytscreeningroom\?vi?=|youtu\.be\/|vi?\/|user\/.+\/u\/\w{1,2}\/|embed\/|watch\?(?:.*\&)?vi?=|\&vi?=|\?(?:.*\&)?vi?=)([^#\&\?\n\/<>"']*)/i;
        var match = url.match(regExp);
        return (match && match[1].length==11)? match[1] : false;
    }
    return (
        <div className='flex flex-col justify-center items-center mainCont'>
            <div className='titleCont'>
                <h1 className='font-body text-4xl'>Online Video Translator</h1>
                <p className='font-body text-lg'>Download videos from youtube in any languages</p>
            </div>
            <div className='searchCont'>
                <input className='inputCont' value={query} onChange={(e) => setquery(e.target.value)} type='text' placeholder="Enter Youtube video link"/>
                <Link to={'/video/' + youtube_parser(query)}>
                    <button className='font-body text-2xl searchButton'>Search</button>
                </Link>
            </div>
        </div>
    )
}

export default Search
