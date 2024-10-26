import {getDownloadURL, getStorage, listAll, ref,} from "firebase/storage";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import app from "../../firebase";
import {fetchDescriptionForWorksFromFirestore} from "./work/stateFireBaseWorks";


const storage = getStorage(app);
const initialState = {
    works: {} as WorksResponseType,
    description: {} as WorksResponseType,
    error: '',
    loading: false,
}


export const fetchPrefixFolder = createAsyncThunk<WorksResponseType, undefined>('ourWorks/fetchImages', async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const listRef = ref(storage, 'gs://stroika-a3a83.appspot.com')
        const res = await listAll(listRef)

        const res4 = await Promise.all(res.prefixes.map(
                async (folderRef) => {
                    const res2 = await listAll(folderRef)
                    const res3 = await Promise.all(res2.items.map(getDownloadURL))
                    return {
                        prefix: folderRef.name,
                        url: res3
                    }
                }
            )
        )
        return res4.reduce((acc, item) => {
            acc[item.prefix] = item.url
            return acc
        }, {} as WorksResponseType)

    } catch (e) {
        return rejectWithValue('error')
    }
})

export const fetchDescription = createAsyncThunk<{
    description: WorksResponseType
}, undefined>('ourWorks/fetchDescription', async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const res = await fetchDescriptionForWorksFromFirestore()
        return {description: res[0]}
    } catch (e) {
        return rejectWithValue('error')
    }

})

const slice = createSlice({
    name: 'ourWorks',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchPrefixFolder.fulfilled, (state, action) => {
                state.works = action.payload
            })
            .addCase(fetchDescription.fulfilled, (state, action) => {
                state.description = action.payload.description
            })
    }
})

export type WorksResponseType = {
    [key: string]: string[]
}


export const ourWorksReducer = slice.reducer