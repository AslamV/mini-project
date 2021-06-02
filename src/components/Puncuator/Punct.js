import { Button } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import ProgressWait from '../CircularProgress/ProgressWait'
import Navbar from '../Navbar/Navbar'
import './punct.css'
function Punct() {
    const [loading, setloading] = useState(false)
    // const [text1, settext1] = useState('')
    const history = useHistory()
    // useEffect( () => {
    //     fetch('/editer').then((response) => {
    //         if(response.ok){
    //             return response.json()
    //         }
    //     }).then(data => {
    //         settext1(data.snippet)
    //         console.log(text1)
    //     })
    // }, [])
    // const onPunctuate = () => {
    //     const formData = new FormData()
    //     formData.append('text',text1)
    //     formData.append('type','punct')
    //     setloading(true)
    //     fetch('/editer',{
    //         method:'POST',
    //         body:formData,
    //     }).then((response) => {
    //         if(response.ok){
    //             setloading(false)
    //             return response.json()
    //         }
    //     }).then(data => {
    //         console.log(data)
    //         settext1(data.snippet)
    //     })
    //     .catch((err) => {
    //         setloading(false)
    //         console.warn(err)
    //     })
    // }
    // const finalSubmit = () => {
    //     const fData = new FormData()
    //     fData.append('text',text1)
    //     fData.append('type','submit')
    //     fetch('/editer',{
    //         method:'POST',
    //         body:fData,
    //     }).then((response) => {
    //         if(response.ok){
    //             console.log(response)
    //             history.push('/translate')
    //         }
    //     })
    //     .catch((err) => {
    //         setloading(false)
    //         console.warn(err)
    //     })
    // }
    return (
        <div>
            <Navbar />
            <div className='punctCont flex flex-col items-center justify-center'>
                {/* <textarea className='font-body text-base' defaultValue={text1} onChange={(e) => settext1(e.target.value)}/> */}
                <div className='flex flex-row items-center justify-items-center mt-3'>
                    <Button  variant="contained" color="primary" style={{marginRight:'10px'}}>Punctuate the text</Button>
                    <Button  variant='outlined' className='ml-2'>Proceed</Button>
                </div>
            </div>
            {loading && <ProgressWait text='Please wait while your text is being puncuated'/>}
        </div>
    )
}

export default Punct
