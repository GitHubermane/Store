import { createAsyncThunk } from "@reduxjs/toolkit"
import typeService from "../../DAL/service/Type.service"

export const getTypes = createAsyncThunk(
    'type/get',
    async (payload, thunkApi) => {
        try {
            const response = await typeService.getAll()

            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)