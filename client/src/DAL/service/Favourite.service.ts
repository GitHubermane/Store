import { AxiosResponse } from 'axios'
import { $api } from '../API/api'
import { IFavouriteDevice } from '../../models/IFavouriteDevice'

export default class favouriteService {
    static async getAll(): Promise<AxiosResponse<Array<IFavouriteDevice>>> {
        return $api.get<Array<IFavouriteDevice>>('/favourite')
    }

    static async addOne(id: number): Promise<AxiosResponse<IFavouriteDevice>> {
        return $api.post<IFavouriteDevice>(`/favourite/${id}`)
    }

    static async deleteOne(id: number): Promise<AxiosResponse<number>> {
        return $api.delete<number>(`/favourite/${id}`)
    }
}
