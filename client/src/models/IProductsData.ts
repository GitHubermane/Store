export interface IProductsDataWithCount {
    count: number
    rows: Array<IProductsData>
}

export interface IProductsData {
    id: number;
    brandId: number;
    typeId: number;
    name: string;
    price: number;
    img: string;
    rating: number;
}