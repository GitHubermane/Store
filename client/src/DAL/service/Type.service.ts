import { AxiosResponse } from "axios";
import { IType } from "../../models/response/IType";
import { $api } from "../API/api";

export default class typeService {
    static async getAll(): Promise<AxiosResponse<IType>> {
        return $api.get<IType>(`/type/`)
    }
}