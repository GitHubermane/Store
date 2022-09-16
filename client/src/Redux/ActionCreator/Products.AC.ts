import { createAsyncThunk } from "@reduxjs/toolkit"
import productsService from "../../DAL/service/Products.service"


export const fetchProducts = createAsyncThunk(
    'products/fetch',
    async (payload, thunkApi) => {
        try {
            const response = await productsService.fetch()
            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const fetchSerchedProducts = createAsyncThunk(
    'products/fetchSerchedProducts',
    async (payload: string, thunkApi) => {
        try {
            const response = await productsService.fetchSearchedProducts(payload)
            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)