import React, { useState } from 'react'
import ProgressWait from '../../components/CircularProgress/ProgressWait'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import CustomizedSnackbar from '../../components/Snackbar/CustomiseSnackbar'
import './sen.css'
function Sensor() {
    const [sensorContent, setsensorContent] = useState()
    const [open, setopen] = useState(false)
    const [loading, setloading] = useState(false)
    const getVid = async () => {
        setloading(true)
        const formData = new FormData()
        formData.append('words_to_filter',sensorContent)
        const resp = await axios.post('/sensor_page',formData)
        console.log(resp)
        if(resp.status === 200){
            alert('Your Video is Downloaded')
            setloading(false)
            setopen(true)
        }
    }
    return (
        <div>
            <Navbar/>
            <div className='senseCont flex flex-col items-center justify-items-center'>
                <textarea placeholder='Enter some explicit content to filter seperated by comas' onChange={(e) => setsensorContent(e.target.value)}>{sensorContent}</textarea>
                <button onClick={getVid} className='sBtnnn font-body text-sm mt-3'>Download Video</button>
            </div>
            {open && <CustomizedSnackbar open={open} setOpen={setopen} message='Video Downloaded Successfully'/>}
            {loading && <ProgressWait text='Downloading.. Please wait'/>}
        </div>
    )
}

export default Sensor
