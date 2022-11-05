import { createAsyncThunk } from "@reduxjs/toolkit"
import brandService from "../../DAL/service/Brand.service"

export const getBrands = createAsyncThunk(
    'brand/get',
    async (payload, thunkApi) => {
        try {
            const response = await brandService.getAll()

            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
