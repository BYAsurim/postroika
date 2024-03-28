import {configureStore} from '@reduxjs/toolkit'
import {reputationReducer} from "../featuers/reputation/reputation.reduser";

export const store = configureStore({
    reducer: {
        comments: reputationReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch