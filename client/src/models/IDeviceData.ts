export interface IDeviceDataWithCount {
    count: number
    rows: Array<IDeviceData>
}

export interface IDeviceData {
    id: number
    userId: number
    brandId: number
    typeId: number
    name: string
    price: number
    img: string
    rating: number
}