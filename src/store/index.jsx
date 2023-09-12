import { configureStore } from "@reduxjs/toolkit"
import { StatsSlice } from "./StatsSlice"
import { ModalSlice } from "./ModalSlice"
import { CardsSlice } from "./CardsSlice"
import { StartButtonSlice } from "./StartButtonSlice"

export const store = configureStore({
    reducer: {
        stats: StatsSlice.reducer,
        startButton: StartButtonSlice.reducer,
        modal: ModalSlice.reducer,
        cards: CardsSlice.reducer
    }
})