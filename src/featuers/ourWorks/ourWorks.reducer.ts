import {getDownloadURL, getStorage, listAll, ref} from "firebase/storage";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const storage = getStorage();
const initialState = {
    urls: null as string[] | null,
    listName: null as string[] | null,
}

export const fetchImages = createAsyncThunk<{
    urls: string[] | null
}, undefined>('ourWorks/fetchImages', async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {


        return {urls: ['']}

    } catch (e) {
        return rejectWithValue('error')
    }
})
export const fetchImageName = createAsyncThunk<{
    listName: string[] | null
}, undefined>('ourWorks/fetchImageName', async (_, thunkAPI) => {
    const {rejectWithValue} = thunkAPI
    try {
        const nameList: { listName: string[] } = {
            listName: []
        }
        const listRef = ref(storage, 'gs://stroika-a3a83.appspot.com/image')
        const allItem = await listAll(listRef)
        allItem.items.forEach(el => nameList.listName.push(el.name))
        return nameList

    } catch (e) {
        return rejectWithValue('error')
    }
})

const slice = createSlice({
    name: 'ourWorks',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchImageName.fulfilled, (state, action) => {
            state.listName = action.payload.listName
        })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.listName = action.payload.urls
            })
    }
})


export const fetchImage = async (name: string) => {
    try {
        return await getDownloadURL(ref(storage, `gs://stroika-a3a83.appspot.com/image/${name}`))

    } catch (e) {
        console.log(e)
    }
}


export const ourWorksReducer = slice.reducer