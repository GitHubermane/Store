import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IProductData } from "../../models/IProductsData"
import { fetchProduct } from "../ActionCreator/Product.AC"

const initialState = {
    product: {} as IProductData,
    isLoading: false,
    error: ''
}

export const ProductSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchProduct.fulfilled.type]: (state, action: PayloadAction<IProductData>) => {
            state.error = ''
            state.isLoading = false
            state.product = action.payload
        },

        [fetchProduct.pending.type]: (state) => {
            state.isLoading = true
        },

        [fetchProduct.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const ProductReducer = ProductSlice.reducer