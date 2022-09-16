import { AxiosResponse } from "axios";
import { IProductData } from "../../models/IProductsData";
import { $api } from "../API/api";

export default class productService {
    static async fetch(id: number): Promise<AxiosResponse<IProductData>> {
        return $api.get<IProductData>(`/device/${id}`)
    }
}