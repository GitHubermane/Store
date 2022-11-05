export interface IDevice {
    name: string
    price: string | number
    img: string
    brandId: number
    typeId: number
}

export type DeviceType = {
    device: IDevice
}