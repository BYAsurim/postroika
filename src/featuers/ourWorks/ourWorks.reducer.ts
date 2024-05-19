import {getDownloadURL, getStorage, listAll, ref} from "firebase/storage";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../app/store";

const storage = getStorage();
const initialState = {
    works: [] as WorksResponseType[],
    error: '',
    loading: false,
}

export const fetchImageUrl = createAsyncThunk<WorksResponseType[], undefined>('ourWorks/fetchImageUrl', async (_, thunkAPI) => {
    const {rejectWithValue, getState, dispatch} = thunkAPI
    try {
        await dispatch(fetchPrefixFolder())
        const {ourWorks} = getState() as RootState
        const result: WorksResponseType[] = ourWorks.works.map(work => ({
            prefix: work.prefix,
            url: [],
        }))

        for (const name of ourWorks.works) {
            const refFolder = ref(storage, `gs://stroika-a3a83.appspot.com/${name.prefix}`)
            const folderRes = await listAll(refFolder)

            for (const item of folderRes.items) {
                const refStorage = ref(storage, `gs://stroika-a3a83.appspot.com/${name.prefix}/${item.name}`)
                const url = await getDownloadURL(refStorage)

                const targetWork = result.find(work => work.prefix === name.prefix)
                if (targetWork) {
                    targetWork.url.push(url)
                }
            }
        }
        return result
    } catch(e) {
        console.log(e)
        return rejectWithValue('error')
    }
})


export const fetchPrefixFolder = createAsyncThunk<{
    prefix: string,
    url: []
}[], undefined>('ourWorks/fetchImages', async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const listRef = ref(storage, 'gs://stroika-a3a83.appspot.com')
        const allItem = await listAll(listRef)
        return allItem.prefixes.map(el => {
            return {
                prefix: el.name,
                url: []
            }
        })

    } catch (e) {
        return rejectWithValue('error')
    }
})


const slice = createSlice({
    name: 'ourWorks',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchPrefixFolder.fulfilled, (state, action) => {
            state.works.splice(state.works.length, 0, ...action.payload)
        })
            .addCase(fetchImageUrl.fulfilled, (state, action) => {
                const fetchedWorks = action.payload;
                for (const fetchedWork of fetchedWorks) {
                    const existingWork = state.works.find(work => work.prefix === fetchedWork.prefix);
                    if (existingWork) {
                        existingWork.url.push(...fetchedWork.url);
                    } else {
                        state.works.push(fetchedWork);
                    }
                }
            })
    }
})

type WorksResponseType = {
    prefix: string | null,
    url: string[]
}


export const ourWorksReducer = slice.reducer