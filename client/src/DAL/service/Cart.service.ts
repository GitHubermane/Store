import { AxiosResponse } from 'axios'
import { $api } from '../API/api'
import { ICart } from '../../models/ICartData'

export default class cartService {
    static async getCart(): Promise<AxiosResponse<ICart>> {
        return $api.get<ICart>('/cart')
    }

    static async addToCart(id: number): Promise<AxiosResponse<any>> {
        return $api.post<any>(`/cart/${id}`)
    }
    
    static async changeQuantity(id: number, quantity: number) {
        return $api.put<number>(`/cart/${id}`, { quantity })
    }

    static async deleteCartDevice(id: number): Promise<AxiosResponse<number>> {
        return $api.delete<number>(`/cart/${id}`)
    }
}
