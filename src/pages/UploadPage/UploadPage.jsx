import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import {UploadIcon} from '@heroicons/react/outline'
import {FormControl,FormControlLabel,FormLabel,Radio,RadioGroup,Checkbox, Button} from  '@material-ui/core'
import { Link } from 'react-router-dom'
import ProgressWait from '../../components/CircularProgress/ProgressWait'
import CustomizedSnackbar from '../../components/Snackbar/CustomiseSnackbar'
import './upl.css'
function UploadPage() {
    const [check, setcheck] = useState('machine')
    const [myFile, setmyFile] = useState('')
    const [loaidng, setloaidng] = useState(false)
    const [open, setopen] = useState(false)
    const cngHandler = (e) => {
		setmyFile(e.target.files[0]);
        console.log(myFile)
	};
    const handleClick = (e) => {
        e.preventDefault()
        if(myFile.type === "video/mp4"){
            setloaidng(true)
            const formData = new FormData();

            formData.append("file", myFile);
            formData.append("check", check)
            console.log(formData)
            fetch('/', {
                method:'POST',
                body:formData,
                // headers:{
                //     "Content-type": "application/json; charset=UTF-8"
                // }
            }).then((response) => {
                if(response.ok){
                    setloaidng(false)
                    console.log(response)
                }
            }).catch((err) => {
                setloaidng(false)
                console.warn(err)
            })
        }else {
            setopen(true)
        }

    }
    return (
        <div>
            <Navbar/>
            <div className='flex flex-col items-center justify-center mt-3'>
            <div class="upload-btn-wrapper">
                <button class="btn font-body text-base">Upload a file</button>
                <UploadIcon className='h-5 w-5 upIcon'/>
                <input type="file"  name='myfile' onChange={cngHandler} />
            </div>
            <FormControl className='mt-3'>
                {/* <FormLabel component="legend">Select</FormLabel> */}
                <RadioGroup  value={check} onChange={(e) => setcheck(e.target.value)}>
                    <FormControlLabel
                    value='machine'
                    control={<Radio color='primary'/>}
                    label='Machine Translation'
                    />
                    <FormControlLabel
                    value='filter'
                    control={<Radio color='primary'/>}
                    label='Filter Explicit Content'
                    />
                </RadioGroup>
            </FormControl>
            <Button variant="contained" color='primary' style={{marginBottom:'10px'}} onClick={handleClick}>Upload</Button>
            <Link to={check === 'machine' ? `/punctuate` : `/sensorPage` }>
                <Button variant="outlined" color="primary">Proceed</Button>
            </Link>
            </div>
            {loaidng && <ProgressWait text='Please wait while your video is being processed'/>}
            {open && <CustomizedSnackbar open={open} setOpen={setopen} message='Please upload video files'/>}
        </div>
    )
}

export default UploadPage
