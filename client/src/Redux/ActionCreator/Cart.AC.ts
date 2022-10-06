import { createAsyncThunk } from "@reduxjs/toolkit"
import cartService from "../../DAL/service/Cart.service"

export const getCart = createAsyncThunk(
    'cart/get',
    async (payload, thunkApi) => {
        try {
            const response = await cartService.getCart()

            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const addToCart = createAsyncThunk(
    'cart/add',
    async (payload: number, thunkApi) => {
        try {
            const response = await cartService.addToCart(payload)

            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const changeQuantity = createAsyncThunk(
    'cart/changeQuantity',
    async (payload: { id: number, quantity: number }, thunkApi) => {
        try {
            const { id, quantity } = payload 
            const response = await cartService.changeQuantity(id, quantity)

            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const deleteCartDevice = createAsyncThunk(
    'cart/delete',
    async (payload: number, thunkApi) => {
        try {
            const response = await cartService.deleteCartDevice(payload)

            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)