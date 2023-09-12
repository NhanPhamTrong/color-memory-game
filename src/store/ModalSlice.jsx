import { createSlice } from "@reduxjs/toolkit"

const ModalSlice = createSlice({
    name: "modal",
    initialState: {
        isActive: false,
        content: ""
    },
    reducers: {
        OpenModal(state, action) {
            state.isActive = true
            state.content = action.payload
        },
        CloseModal(state) {
            state.isActive = false
            state.content = ""
        }
    }
})

export { ModalSlice }

export const modalActions = ModalSlice.actions