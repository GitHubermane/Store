import { createAsyncThunk } from "@reduxjs/toolkit"
import productsService from "../../../DAL/service/Admin/Products.service"
import { DeviceType, IDevice } from "../../../models/request/IDevice"


export const createProduct = createAsyncThunk(
    'products/fetch',
    async (payload: IDevice, thunkApi) => {
        try {
            const response = await productsService.createProduct(payload)
            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
