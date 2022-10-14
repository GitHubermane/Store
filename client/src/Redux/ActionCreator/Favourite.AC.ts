import { createAsyncThunk } from "@reduxjs/toolkit";
import favouriteService from "../../DAL/service/Favourite.service";

export const getFavourites = createAsyncThunk(
    'favourite/get',
    async (payload, thunkApi) => {
        try {
            const response = await favouriteService.getAll()

            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const addToFavourite = createAsyncThunk(
    'favourite/add',
    async (payload: number, thunkApi) => {
        try {
            const response = await favouriteService.addOne(payload)

            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)

export const deleteFavouriteDevice = createAsyncThunk(
    'favourite/delete',
    async (payload: number, thunkApi) => {
        try {
            const response = await favouriteService.deleteOne(payload)

            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue(error.message)
        }
    }
)
