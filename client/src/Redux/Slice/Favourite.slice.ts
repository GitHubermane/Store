import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IFavouriteDevice } from "../../models/IFavouriteDevice"
import { addToFavourite, deleteFavouriteDevice, getFavourites } from "../ActionCreator/Favourite.AC"

const initialState = {
    devices: [] as Array<IFavouriteDevice>,
    isLoading: false,
    error: ''
}

export const FavouriteSlice = createSlice({
    name: 'favourite',
    initialState,
    reducers: {},
    extraReducers: {
        [getFavourites.fulfilled.type]: (state, action: PayloadAction<Array<IFavouriteDevice>>) => {
            state.devices = action.payload
            state.isLoading = false
        },
        [getFavourites.pending.type]: (state) => {
            state.isLoading = true
        },
        [getFavourites.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

        [addToFavourite.fulfilled.type]: (state) => {
            state.error = ''
            state.isLoading = false
        },
        [addToFavourite.pending.type]: (state) => {
            state.isLoading = true
        },
        [addToFavourite.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

        [deleteFavouriteDevice.fulfilled.type]: (state) => {
            state.error = ''
            state.isLoading = false
        },
        [deleteFavouriteDevice.pending.type]: (state) => {
            state.isLoading = true
        },
        [deleteFavouriteDevice.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

    }
})

export const FavouriteReducer = FavouriteSlice.reducer
