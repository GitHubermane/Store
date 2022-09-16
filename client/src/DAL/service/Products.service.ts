import { AxiosResponse } from "axios";
import { IProductData } from "../../models/IProductsData";
import { $api } from "../API/api";

export default class productsService {
    static async fetch(): Promise<AxiosResponse<Array<IProductData>>> {
        return $api.get<Array<IProductData>>('/device')
    }
    static async fetchSearchedProducts(name: string): Promise<AxiosResponse<Array<IProductData>>> {
        return $api.get<Array<IProductData>>(`/device/?name=${name}`)
    }
}
