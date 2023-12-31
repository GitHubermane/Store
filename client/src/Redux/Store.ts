import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { AuthReducer } from "./Slice/Auth.slice";
import { BrandReducer } from "./Slice/Brand.slice";
import { CartReducer } from "./Slice/Cart.slice";
import { FavouriteReducer } from "./Slice/Favourite.slice";
import { ProductReducer } from "./Slice/Product.slice";
import { ProductsReducer } from "./Slice/Products.slice";
import { TypeReducer } from "./Slice/Type.slice";

const rootReducer = combineReducers({
    Auth: AuthReducer,
    Cart: CartReducer,
    Products: ProductsReducer,
    Product: ProductReducer,
    Favourites: FavouriteReducer,
    Brands: BrandReducer,
    Types: TypeReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    // middleware: getDefaultMiddleware => 
    //     getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootReducerType = ReturnType<typeof rootReducer>
export type StateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch