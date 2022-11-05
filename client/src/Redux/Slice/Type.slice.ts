import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IType } from "../../models/response/IType"
import { getTypes } from "../ActionCreator/Type.AC"

const initialState = {
    types: [] as Array<IType>,
    isLoading: false,
    error: ''
}

export const TypeSlice = createSlice({
    name: 'type',
    initialState,
    reducers: {},
    extraReducers: {
        [getTypes.fulfilled.type]: (state, action: PayloadAction<Array<IType>>) => {
            state.error = ''
            state.types = action.payload
            state.isLoading = false
        },

        [getTypes.pending.type]: (state) => {
            state.isLoading = true
        },

        [getTypes.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }
})

export const TypeReducer = TypeSlice.reducer