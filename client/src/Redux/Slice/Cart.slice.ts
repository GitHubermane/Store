import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICart } from "../../models/ICartData"
import { ICartDeviceData } from "../../models/ICartDeviceData"
import { addToCart, changeQuantity, deleteCartDevice, getCart } from "../ActionCreator/Cart.AC"

const initialState = {
    id: null as null | number,
    userId: null as null | number,
    devices: [] as Array<ICartDeviceData>,
    isLoading: false,
    error: ''
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: {
        [getCart.fulfilled.type]: (state, action: PayloadAction<ICart>) => {
            state.error = ''
            state.id = action.payload.id
            state.userId = action.payload.userId
            state.devices = action.payload.devices
            state.isLoading = false
        },
        [getCart.pending.type]: (state) => {
            state.isLoading = true
        },
        [getCart.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

        [changeQuantity.fulfilled.type]: (state) => {
            state.error = ''
            state.isLoading = false
        },
        [changeQuantity.pending.type]: (state) => {
            state.isLoading = true
        },
        [changeQuantity.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

        [addToCart.fulfilled.type]: (state) => {
            state.error = ''
            state.isLoading = false
        },
        [addToCart.pending.type]: (state) => {
            state.isLoading = true
        },
        [addToCart.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

        [deleteCartDevice.fulfilled.type]: (state) => {
            state.error = ''
            state.isLoading = false
        },
        [deleteCartDevice.pending.type]: (state) => {
            state.isLoading = true
        },
        [deleteCartDevice.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const CartReducer = CartSlice.reducer
