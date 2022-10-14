import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ICart } from "../../models/ICartData"
import { ICartDeviceData } from "../../models/ICartDeviceData"
import { addToCart, changeQuantity, deleteCartDevice, getCart } from "../ActionCreator/Cart.AC"

const initialState = {
    id: null as null | number,
    userId: null as null | number,
    devices: [] as Array<ICartDeviceData>,
    total: null as null | number,
    isLoading: false,
    error: ''
}

export const CartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setQuantity(state, action: PayloadAction<{id: number, quantity: number}>) {
            const {id, quantity} = action.payload
            state.devices.some((device) => {
                if (device.deviceId === id) {
                    device.quantity = quantity
                }
            })
        }
    },
    extraReducers: {
        [getCart.fulfilled.type]: (state, action: PayloadAction<ICart>) => {
            const { id, userId, devices, total } = action.payload
            state.error = ''
            state.id = id
            state.userId = userId
            state.devices = devices
            state.total = total
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
export const {setQuantity} = CartSlice.actions