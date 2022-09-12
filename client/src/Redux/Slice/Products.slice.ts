import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProductsData, IProductsDataWithCount } from "../../models/IProductsData"
import { fetchProducts } from "../ActionCreator/Products.AC"

type ProductsStateType = typeof initialState

const initialState = {
    productsCount: 0,
    products: [] as Array<IProductsData>,
    isLoading: false,
    error: ''
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProductsDataWithCount>) => {
            state.error = ''
            state.isLoading = false
            state.products = action.payload.rows
            state.productsCount = action.payload.count
        },

        [fetchProducts.pending.type]: (state) => {
            state.isLoading = true
        },

        [fetchProducts.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const ProductsReducer = ProductsSlice.reducer