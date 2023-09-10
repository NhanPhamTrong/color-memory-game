import { createSlice } from "@reduxjs/toolkit"

const CardSlice = createSlice({
    name: "card",
    initialState: [],
    reducers: {
        ChooseCard(state, action) {
            return state.map(card => card.name === action.payload ? (card.isChosen ? card : {...card, isChosen: true}) : card)
        }
    }
})

export const cardActions = CardSlice.actions

export { CardSlice }