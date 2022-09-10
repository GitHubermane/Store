import { AxiosResponse } from 'axios'
import { $api } from '../API/api'
import { IAuthResponse } from '../../models/response/IAuthResponse'

export default class authService {
    static async registration(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/registration', { email, password })
    }

    static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
        return $api.post<IAuthResponse>('/user/login', { email, password })
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }

}
