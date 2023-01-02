import { createAsyncThunk } from "@reduxjs/toolkit"
import userService from "../../DAL/service/User.service"

export const getUser = createAsyncThunk(
    'user/get',
    async (id: number, thunkApi) => {
        try {
            const response = await userService.getOne(id) 
            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)