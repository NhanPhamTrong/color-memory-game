import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchColors = createAsyncThunk("fetchColors", async () => {
    const response = await fetch("https://www.csscolorsapi.com/api/colors")
    return response.json()
})

const CardsSlice = createSlice({
    name: "cards",
    initialState: {
        list: []
    },
    extraReducers: builder => {
        builder.addCase(fetchColors.fulfilled, (state, action) => {
            state.list = action.payload.colors
        })
    }
})

export { CardsSlice }