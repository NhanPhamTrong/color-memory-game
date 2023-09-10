import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { StatsSlice } from "./StatsSlice"
import { CardsSlice } from "./CardsSlice"
import reducer from "./CardsSlice"
import api from "./middleware/api"

export const cardStore = () => {
    return configureStore({
        reducer,
        middleware: [...getDefaultMiddleware(), api]
    })
}

export const store = configureStore({
    reducer: {
        stats: StatsSlice.reducer
    }
})

// console.log(cStore)
// console.log(store)
// console.log(CardsSlice.reducer)
// console.log(StatsSlice.reducer)