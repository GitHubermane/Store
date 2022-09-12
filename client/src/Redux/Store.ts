import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "../DAL/API/RTKapiSlice";
import { AuthReducer } from "./Slice/Auth.slice";
import { ProductsReducer } from "./Slice/Products.slice";

const rootReducer = combineReducers({
    Auth: AuthReducer,
    Products: ProductsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(apiSlice.middleware)
})
//@ts-ignore
window.store = store

export type RootReducerType = ReturnType<typeof rootReducer>
export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch