import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

export const fetchColors = createAsyncThunk("fetchColors", async () => {
    const response = await fetch("https://www.csscolorsapi.com/api/colors")
    return response.json()
})

const CardsListSlice = createSlice({
    name: "cards",
    initialState: {
        isActive: false,
        list: []
    },
    extraReducers: builder => {
        builder.addCase(fetchColors.fulfilled, (state, action) => {
            state.list = action.payload.colors.map((color, index) => ({...color, isInLevel: false, isChosen: false, id: index}))
        })
    },
    reducers: {
        ChooseCard(state, action) {
            state.list = action.payload
        },
        OpenCardsList(state) {
            state.isActive = true
        }
    }
})

export { CardsListSlice }

export const cardsListActions = CardsListSlice.actions