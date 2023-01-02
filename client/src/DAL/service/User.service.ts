import { AxiosResponse } from "axios";
import { IUserDataWithDevices } from "../../models/response/IUser";
import { $api } from "../API/api";

export default class userService {
    static async getOne(id: number): Promise<AxiosResponse<IUserDataWithDevices>> {
        return $api.get<IUserDataWithDevices>(`/user/${id}`)
    }
}