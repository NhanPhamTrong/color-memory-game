import { createSlice } from "@reduxjs/toolkit"

const StatsSlice = createSlice({
    name: "stats",
    initialState: {
        level: 1,
        score: 0,
        highestScore: 0
    },
    reducers: {
        AddLevel(state) {
            state.level ++
        },
        ResetLevel(state) {
            state.level = 0
        },
        AddScore(state) {
            state.score ++
        },
        ResetScore(state) {
            state.score = 0
        },
        SetHighestScore(state) {
            state.highestScore = 100
        }
    }
})

export { StatsSlice }

export const statsActions = StatsSlice.actions