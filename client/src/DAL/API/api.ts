import axios from "axios"

export const API_URL = `${process.env.REACT_APP_SERVER_URL}/api/`

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})