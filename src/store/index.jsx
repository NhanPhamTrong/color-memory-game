import { configureStore } from "@reduxjs/toolkit"
import { StatsSlice } from "./StatsSlice"
import { ModalSlice } from "./ModalSlice"
import { CardsSlice } from "./CardsSlice"

export const store = configureStore({
    reducer: {
        stats: StatsSlice.reducer,
        modal: ModalSlice.reducer,
        cards: CardsSlice.reducer
    }
})