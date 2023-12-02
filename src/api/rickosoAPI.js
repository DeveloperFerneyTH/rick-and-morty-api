import axios from 'axios'

const rikosoApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
})

export default rikosoApi