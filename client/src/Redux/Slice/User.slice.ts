import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUserDataWithDevices } from '../../models/response/IUser'
import { getUser } from '../ActionCreator/User.AC'

const initialState = {
    userData: {} as IUserDataWithDevices,
    isLoading: false,
    error: ''
}

export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {

        [getUser.fulfilled.type]: (state, action: PayloadAction<IUserDataWithDevices>) => {
            state.error = ''
            state.isLoading = false
            state.userData = action.payload
        },

        [getUser.pending.type]: (state) => {
            state.isLoading = true
        },

        [getUser.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },
    }

})

export const UserReducer = UserSlice.reducer
