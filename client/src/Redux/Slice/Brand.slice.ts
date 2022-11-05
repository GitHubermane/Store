import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IBrand } from "../../models/response/IBrand"
import { getBrands } from "../ActionCreator/Brand.AC"

const initialState = {
    brands: [] as Array<IBrand>,
    isLoading: false,
    error: ''
}

export const BrandSlice = createSlice({
    name: 'brand',
    initialState,
    reducers: {},
    extraReducers: {
        [getBrands.fulfilled.type]: (state, action: PayloadAction<Array<IBrand>>) => {
            state.error = ''
            state.brands = action.payload
            state.isLoading = false
        },

        [getBrands.pending.type]: (state) => {
            state.isLoading = true
        },

        [getBrands.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const BrandReducer = BrandSlice.reducer