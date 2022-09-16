export interface IProductDataWithCount {
    count: number
    rows: Array<IProductData>
}

export interface IProductData {
    id: number;
    brandId: number;
    typeId: number;
    name: string;
    price: number;
    img: string;
    rating: number;
}