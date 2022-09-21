import axios from "axios"
import { SERVER_URL } from "../../env"


export const API_URL = `${SERVER_URL}/api/`

export const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})