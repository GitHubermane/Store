import axios, { AxiosResponse } from 'axios'
import { $api, API_URL } from '../API/api'
import { IAuthResponse } from '../../models/response/IAuthResponse'

export default class authService {
    static async registration(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/user/registration', { email, password })
    }

    static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/user/login', { email, password })
    }

    static async logout(): Promise<void> {
        return $api.post('/user/logout')
    }

    static async check() {
        return axios.get<IAuthResponse>(`${API_URL}/user/refresh`, {withCredentials: true})
    }
}
