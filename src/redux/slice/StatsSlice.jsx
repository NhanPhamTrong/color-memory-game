import { createSlice } from "@reduxjs/toolkit"

const StatsSlice = createSlice({
    name: "stats",
    initialState: {
        level: 1,
        score: 0,
        highestScore: 0,
        isLose: false
    },
    reducers: {
        AddLevel(state) {
            state.level ++
        },
        AddScore(state) {
            state.score ++
        },
        SetResult(state) {
            state.isLose = true
            state.highestScore = state.highestScore < state.score ? state.score : state.highestScore
        },
        Reset(state) {
            state.level = 1
            state.score = 0
        }
    }
})

export { StatsSlice }

export const statsActions = StatsSlice.actions