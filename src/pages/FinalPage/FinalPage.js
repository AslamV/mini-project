import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import axios from 'axios'
import './final.css'
import CustomizedSnackbar from '../../components/Snackbar/CustomiseSnackbar'
import ProgressWait from '../../components/CircularProgress/ProgressWait'
import { useHistory } from 'react-router-dom'

function FinalPage() {
    const [loading, setloading] = useState(false)
    const [open, setopen] = useState(false)
    const downloadVid = async () => {
        setloading(true)
        const formData = new FormData()
        formData.append('type','downloadVideo')
        const resp = await axios.post('/final_page1',formData)
        console.log(resp)
        if(resp.statusText == 'OK'){
            alert('Your Video is Downloaded')
            setloading(false)
            setopen(true)
        }
    }
    const getTsub = async () => {
        setloading(true)
        const formData = new FormData()
        formData.append('type','tsub')
        const resp = await axios.post('/final_page1',formData)
        console.log(resp)
        if(resp.statusText == 'OK'){
            // alert('Your Video is Downloaded')
            setloading(false)
            setopen(true)
        }
    }
    const getOsub = async () => {
        setloading(true)
        const formData = new FormData()
        formData.append('type','osub')
        const resp = await axios.post('/final_page1',formData)
        console.log(resp)
        if(resp.statusText == 'OK'){
            // alert('Your Video is Downloaded')
            setloading(false)
            setopen(true)
        }
    }

    return (
        <div>
            <Navbar/>
            <div className='flex flex-row items-center justify-center'>
                <button onClick={downloadVid} className='sBtnnn font-body text-sm'>Download Video</button>
                <button onClick={getTsub} className='sBtnnn font-body text-sm mx-8'>Download Sub(Translated)</button>
                <button onClick={getOsub} className='sBtnnn font-body text-sm'>Download Sub(English)</button>
            </div>
            {open && <CustomizedSnackbar open={open} setOpen={setopen} message='Downloaded Successfully'/>}
            {loading && <ProgressWait text='Downloading.. Please wait'/>}
        </div>
    )
}

export default FinalPage
