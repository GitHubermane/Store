import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../../DAL/service/Auth.service";

export const login = createAsyncThunk(
    'auth/login',
    async (payload: { email: string, password: string }, thunkApi) => {
        try {
            const response = await authService.login(payload.email, payload.password)
            localStorage.setItem('token', response.data.userData.tokens.accessToken)
        
            return response.data.userData.user
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const registration = createAsyncThunk(
    'auth/registration',
    async ({ email, password }: { email: string, password:string}, thunkApi) => {
        try {
            const response = await authService.registration(email, password)
            localStorage.setItem('token', response.data.userData.tokens.accessToken)

            return response.data.userData.user
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const logout = createAsyncThunk(
    'auth/logout',
    async (payload, thunkApi) => {
        try {
            const response = await authService.logout()
            localStorage.removeItem('token')

            return response
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const check = createAsyncThunk(
    'auth/check',
    async (payload, thunkApi) => {
        try {
            const response = await authService.check()
            localStorage.setItem('token', response.data.userData.tokens.accessToken)
            
            return response.data.userData.user
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
