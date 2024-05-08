import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchDataFromFirestore, setDataToFirestore} from "./stateReputation";

const initialState = {
    reputation: null as commentsResponseType[] | null
};
export const fetchReputationData = createAsyncThunk<{
    reputation: commentsResponseType[]
}, undefined>('reputation/fetchData', async (_, thunkAPI) => {
    try {
        const res = await fetchDataFromFirestore()
        return {reputation: res}
    } catch (e) {
        return thunkAPI.rejectWithValue('Error fetching data')
    }
})
export const addReview = createAsyncThunk<{ name: string, comment: string }, {
    name: string,
    comment: string
}>('reputation/addReview', async (param, thunkAPI) => {
    try {
        await setDataToFirestore(param.name, param.comment)
        return param
    } catch (e) {
        return thunkAPI.rejectWithValue('Error fetching data')
    }
})


const slice = createSlice({
    name: "reputation",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchReputationData.fulfilled, (_, action) => {
            return action.payload
        })
            .addCase(addReview.fulfilled, (state, action) => {
                state.reputation?.unshift(action.payload)
            })
    }
});

export const reputationReducer = slice.reducer;

//type
export type commentsResponseType = {
    name: string | null,
    comment: string | null,
}