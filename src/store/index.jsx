import { configureStore } from "@reduxjs/toolkit"
import { StatsSlice } from "./StatsSlice"

export const store = configureStore({
    reducer: StatsSlice.reducer
})