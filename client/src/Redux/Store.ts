import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {

    }
})

export type RootStateType = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch