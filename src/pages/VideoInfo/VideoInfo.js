import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { fetchData } from '../../request'
import './vinfo.css'
function VideoInfo() {
    const [videoData, setvideoData] = useState({})
    const {id} = useParams()
    console.log(id)

    useEffect( () => {
        const getData = async () => {
            const rslt = await fetchData(id) 
            setvideoData(rslt)
            console.log(videoData)
            }
            getData()
        
    }, [])
    return (
        <div>
            <Navbar/>
            <div className='vinfoCont flex flex-row items-center justify-center'>
                <img width='300px' height='124px' src={`https://i.ytimg.com/vi/${videoData.id}/mqdefault.jpg`}/>
                <div className='contentCont flex flex-col justify-center items-start'>
                    <h1 className='font-body text-lg text-black font-medium'>{videoData.title}</h1>
                    <p className='font-body text-lg text-gray-400 font-bold mt-2'>{videoData.duration}</p>
                    <Link to='/translate'>
                        <button className='font-body text-2xl mt-12 cursor-pointer hover:bg-blue-700 vButton'>Get Transcript</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default VideoInfo
