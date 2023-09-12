import { configureStore } from "@reduxjs/toolkit"
import { StatsSlice } from "./slice/StatsSlice"
import { ModalSlice } from "./slice/ModalSlice"
import { CardsListSlice } from "./slice/CardsListSlice"
import { StartButtonSlice } from "./slice/StartButtonSlice"

export const store = configureStore({
    reducer: {
        stats: StatsSlice.reducer,
        startButton: StartButtonSlice.reducer,
        modal: ModalSlice.reducer,
        cardsList: CardsListSlice.reducer
    }
})