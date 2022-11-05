import { AxiosResponse } from "axios";
import { IBrand } from "../../models/response/IBrand";
import { $api } from "../API/api";

export default class brandService {
    static async getAll(): Promise<AxiosResponse<IBrand>> {
        return $api.get<IBrand>(`/brand/`)
    }
}