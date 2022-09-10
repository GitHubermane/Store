import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import authService from '../../DAL/service/Auth.service'
import { ITokens, IUser, IUserData } from '../../models/IUserData'
import { login } from '../ActionCreator/Auth.AC'

type LoginStateType = typeof initialState

const initialState = {
    userData: {
        user: {},
        tokens: {}
    },
    isAuth: false,
    isLoading: false,
    error: ''
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled.type]: (state, action: PayloadAction<IUserData>) => {
            let { userData } = state
            state.error = ''
            state.isAuth = true
            state.isLoading = false
            userData.user = action.payload.user
            userData.tokens = action.payload.tokens
        },

        [login.pending.type]: (state) => {
            state.isLoading = true
        },

        [login.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false 
            state.error = action.payload
        },
    }

})

export const AuthReducer = AuthSlice.reducer
// export const { setCredentials, logout } = AuthSlice.actions