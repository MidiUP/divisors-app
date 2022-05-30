import axios from 'axios'

export const divisorsApi = axios.create({
    baseURL: process.env.REACT_APP_DIVISORS_API_URL
})