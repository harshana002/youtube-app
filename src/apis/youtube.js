import axios from 'axios';

const KEY ='AIzaSyD1jWrFccfokRK7x73xqGIWIPvEDDZAazs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})