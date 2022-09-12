import { AxiosResponse } from "axios";
import { IProductsData } from "../../models/IProductsData";
import { $api } from "../API/api";

export default class productsService {
    static async fetch(): Promise<AxiosResponse<Array<IProductsData>>> {
        return $api.get<Array<IProductsData>>('/device')
    }

}
