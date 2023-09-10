import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./API"

const CardsSlice = createSlice({
    name: "cards",
    initialState: {
        cards: [],
        loading: false,
    },
    reducers: {
        cardsRequested: (cards) => {
            cards.loading = true
        },

        cardsReceived: (cards, action) => {
            cards.cards = action.payload
            cards.loading = false
        },

        cardsRequestFailed: (cards) => {
            cards.loading = false
        },
    },
})

export default CardsSlice.reducer

const { cardsRequested, cardsReceived, cardsRequestFailed } = CardsSlice.actions

export const loadCards = () => (dispatch) => {
    return dispatch(
        apiCallBegan({
            onStart: cardsRequested.type,
            onSuccess: cardsReceived.type,
            onError: cardsRequestFailed.type,
        })
    )
}