import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    name: '' as string | null,
    comment: '' as string | null,
    reputation: null as commentsResponseType | null

};

export type AppInitialStateType = typeof initialState;


const slice = createSlice({
    name: "reputation",
    initialState,
    reducers: {
        setReputationData: (state, action: PayloadAction<{ name: string | null, comment: string | null }>) => {

        }
    },
});

export const reputationReducer = slice.reducer;
export const reputationActions = slice.actions;


//type
export type commentsResponseType = {
    name: string | null,
    comment: string | null,
}