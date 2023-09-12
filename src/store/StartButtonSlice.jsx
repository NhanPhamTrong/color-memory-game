import { createSlice } from "@reduxjs/toolkit"

const StartButtonSlice = createSlice({
    name: "start button",
    initialState: {
        isActive: true
    },
    reducers: {
        StartGame(state) {
            state.isActive = false
        }
    }
})

export { StartButtonSlice }

export const startButtonActions = StartButtonSlice.actions