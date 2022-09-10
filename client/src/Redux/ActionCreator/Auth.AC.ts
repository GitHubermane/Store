import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../DAL/service/Auth.service";
import { DispatchType } from "../Store";

// export const login = (email: string, password: string) => async (dispatch: DispatchType) => {
//     try {
//         const response = await authService.login(email, password)
//         console.log(response.data.user);
//         return response.data

//     } catch (error) {
//         console.log(error);

//     }
// }

export const login = createAsyncThunk(
    'auth/login',
    async (payload: { email: string, password: string }, thunkApi) => {
        try {
            const response = await authService.login(payload.email, payload.password)
            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)