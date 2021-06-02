import React, { useEffect, useState } from 'react'
import SubBox from './SubBox'
import parseSRT from 'parse-srt'
import axios from 'axios'
import './translate.css'
import ProgressWait from '../../components/CircularProgress/ProgressWait'
import { getSub } from '../../components/request'
import { Link } from 'react-router-dom'
function Translate() {
    const [subText, setsubText] = useState('')
    const [loading, setloading] = useState(false)
    const [trans, settrans] = useState(false)
    const [transText, settransText] = useState('')
    const [lang, setlang] = useState('')
    useEffect( () => {
        const fteSub =async () => {
            try{
                const {data} = await axios.get('/translate')
                console.log(data)
                setsubText(data.snippet)
                console.log(subText)
            }
            catch(err){
                console.log(err)
            }
        }
        fteSub()
    }, [])


    const getSegmented = async () => {
        const formData = new FormData()
        formData.append('txt', subText)
        formData.append('segment', 'sg')
        const {data} = await axios.post('/translate',formData)
        console.log(data)
        setsubText(data.snippet)
    }
    const getTranslated = async () => {
        // setsegment('sg')
        setloading(true)
        const formData = new FormData()
        formData.append('txt', subText)
        formData.append('lang', lang)
        const {data} = await axios.post('/translatesub',formData)
        console.log(data)
        setloading(false)
        settrans(true)
        settransText(data.subText)
    }
    const undoSegmented = async () => {
        const {data} = await axios.post('/unsegment')
        console.log(data)
        setsubText(data.snippet)
    }
    return (
        <div>
            <div className="translate py-4 px-7 flex flex-row items-center justify-between">
                <div className="selectMenu flex flex-col">
                    <div className='meenu'>
                    <select name=""  id="" defaultValue={lang} onChange={(e) => setlang(e.target.value)}>
                        <option value="" disabled selected>Select the Language</option>
                        <option value="hi">Hindi</option>
                        <option value="ml">Malayalam</option>
                        <option value="fr">French</option>
                    </select>
                    </div>
                </div>
                <div className="tButtons flex flex-row items-center justify-between">
                    <button className='tBtn font-body text-lg font-medium' onClick={getTranslated}>Transalate</button>
                    <button className='tBtn font-body text-lg font-medium'>Download Subtitles</button>
                    <Link to='/finalPage'>
                    <button className='expBtn font-body text-lg font-medium'>Proceed</button>
                    </Link>
                </div>
            </div>
            <hr style={{height:'4px'}}/>
            <div className='flex flex-row justify-between'>
            <SubBox getSegmented={getSegmented} undoSegmented={undoSegmented} data={parseSRT(subText)} title='Orginal Subtitles' tran/>
            {trans && <SubBox data={parseSRT(transText)} title='Translated Subtitles'/>}
            </div>
            {loading && <ProgressWait text='Please wait while your text is translated'/>}
            {/* {loading && segment == 'unsg' && <ProgressWait text='Please wait while your text is being unsegmented'/>} */}
        </div>
    )
}

export default Translate
