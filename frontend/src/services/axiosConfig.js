import axios from 'axios'

export default axios.create(
    {
        baseURL: 'http://localhost:4000',
        responseType: 'json',
        timeout: 6000
    }
)