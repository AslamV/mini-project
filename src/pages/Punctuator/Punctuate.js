import { Button } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useHistory} from 'react-router-dom'
import ProgressWait from '../../components/CircularProgress/ProgressWait'
import Navbar from '../../components/Navbar/Navbar'
import './pun.css'
function Punctuate() {
    const [loading, setloading] = useState(false)
    const [text, settext] = useState('')
    const history = useHistory()
    useEffect(() => {
        const fteText =async () => {
            try{
                const {data} = await axios.get('/editer')
                console.log(data)
                settext(data.snippet)
                console.log(text)
            }
            catch(err){
                console.log(err)
            }
        }
        fteText()
    }, [])
    const onPunctuate = () => {
        const formData = new FormData()
        formData.append('text',text)
        formData.append('type','punct')
        setloading(true)
        fetch('/editer',{
            method:'POST',
            body:formData,
        }).then((response) => {
            if(response.ok){
                setloading(false)
                return response.json()
            }
        }).then(data => {
            console.log(data)
            settext(data.snippet)
        })
        .catch((err) => {
            setloading(false)
            console.warn(err)
        })
    }
    const finalSubmit = () => {
        const fData = new FormData()
        fData.append('text',text)
        fData.append('type','submit')
        fetch('/editer',{
            method:'POST',
            body:fData,
        }).then((response) => {
            if(response.ok){
                console.log(response)
                history.push('/translate')
            }
        })
        .catch((err) => {
            setloading(false)
            console.warn(err)
        })
    }
    return (
        <div>
            <Navbar />
            <div className='punctCont flex flex-col items-center justify-center'>
                <textarea className='font-body text-base' defaultValue={text}/>
                <div className='flex flex-row items-center justify-items-center mt-3'>
                    <Button onClick={onPunctuate}  variant="contained" color="primary" style={{marginRight:'10px'}}>Punctuate the text</Button>
                    <Button onClick={finalSubmit}  variant='outlined' className='ml-2'>Proceed</Button>
                </div>
            </div>
            {loading && <ProgressWait text='Please wait while your text is being puncuated'/>}
        </div>
    )
}

export default Punctuate
