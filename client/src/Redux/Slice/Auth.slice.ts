import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../models/IUserData'
import { check, login, logout, registration } from '../ActionCreator/Auth.AC'

const initialState = {
    userData: {} as IUser,
    isAuth: false,
    isLoading: false,
    error: ''
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {

        [login.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.error = ''
            state.isAuth = true
            state.isLoading = false
            state.userData = action.payload
        },

        [login.pending.type]: (state) => {
            state.isLoading = true
        },

        [login.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false 
            state.error = action.payload
        },

        [logout.fulfilled.type]: (state) => {
            state.isAuth = false
            state.userData = {} as IUser
        },
        
        [registration.fulfilled.type]: (state) => {
            state.isAuth = false
            state.userData = {} as IUser
        },

        [check.fulfilled.type]: (state, action: PayloadAction<IUser>) => {
            state.isAuth = true
            state.isLoading = false
            state.userData = action.payload
        },

        [check.pending.type]: (state) => {
            state.isLoading = true
        },

        [check.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        },

    }

})

export const AuthReducer = AuthSlice.reducer
// export const { setCredentials, logout } = AuthSlice.actions