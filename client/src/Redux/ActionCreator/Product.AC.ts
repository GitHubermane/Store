import { createAsyncThunk } from "@reduxjs/toolkit"
import productService from "../../DAL/service/Product.service"

export const fetchProduct = createAsyncThunk(
    'product/fetch',
    async (id: number, thunkApi) => {
        try {
            const response = await productService.fetch(id)
            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)