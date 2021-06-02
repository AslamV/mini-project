import axios from 'axios'

const apiKey = 'AIzaSyBKwYAswLlW0ux1wmEekZolN_nK619jPNc'
export const fetchData = async (vId) => {
    const { data : {items} } = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=contentDetails&part=statistics&id=${vId}&key=${apiKey}`)
    const dt = items[0]
    const newDur = dt.contentDetails.duration.split("PT")
    const modifiedData = {
        duration: newDur,
        id:dt.id,
        title:dt.snippet.title
    }
    return modifiedData
}