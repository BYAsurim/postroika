import {configureStore} from '@reduxjs/toolkit'
import {reputationReducer} from "../featuers/reputation/reputation.reduser";
import {ourWorksReducer} from "../featuers/ourWorks/ourWorks.reducer";

export const store = configureStore({
    reducer: {
        comments: reputationReducer,
        ourWorks: ourWorksReducer,
    },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch