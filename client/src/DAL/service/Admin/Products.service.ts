import { AxiosResponse } from "axios";
import { IProductData } from "../../../models/IProductsData";
import { DeviceType, IDevice } from "../../../models/request/IDevice";
import { $api } from "../../API/api";

export default class productService {
    static async createProduct(device: IDevice): Promise<AxiosResponse<IProductData>> {
        const formData = new FormData()
        formData.append('name', device.name)
        formData.append('price', `${device.price}`)
        formData.append('brandId', `${device.brandId}`)
        formData.append('typeId', `${device.typeId}`)
        formData.append('img', device.img)

        return $api.post<IProductData>(
            `/device/`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
        )
    }
}