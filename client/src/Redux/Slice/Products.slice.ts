import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProductData, IProductDataWithCount } from "../../models/IProductsData"
import { fetchProducts, fetchSerchedProducts } from "../ActionCreator/Products.AC"

type ProductsStateType = typeof initialState

const initialState = {
    productsCount: 0,
    products: [] as Array<IProductData>,
    searchedProducts: [] as Array<IProductData>,
    isLoading: false,
    error: ''
}

export const ProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setSearchedProducts: (state, action) => {
            state.searchedProducts = action.payload
        }
    },
    extraReducers: {
        [fetchProducts.fulfilled.type]: (state, action: PayloadAction<IProductDataWithCount>) => {
            state.error = ''
            state.isLoading = false
            state.products = action.payload.rows
            state.productsCount = action.payload.count
        },

        [fetchSerchedProducts.fulfilled.type]: (state, action: PayloadAction<IProductDataWithCount>) => {
            state.searchedProducts = action.payload.rows
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