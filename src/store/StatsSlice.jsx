import { createSlice } from "@reduxjs/toolkit"

const StatsSlice = createSlice({
    name: "stats",
    initialState: { level: 1, score: 0, highestScore: 0 },
    reducers: {
        
    }
})

export const statsActions = StatsSlice.actions

export { StatsSlice }