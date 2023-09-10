import axios from "axios"
import * as actions from "../API"

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {
        if (action.type !== actions.apiCallBegan.type) return next(action)

        const { method, data, onStart, onSuccess, onError } =
            action.payload

        if (onStart) dispatch({ type: onStart })

        next(action)

        try {
            const response = await axios.request({
                baseURL: "https://www.csscolorsapi.com/api/colors",
                method,
                data,
            })
            // General
            console.log(response.data.colors)
            dispatch(actions.apiCallSuccess(response.data.colors))
            // Specific
            if (onSuccess)
                dispatch({ type: onSuccess, payload: response.data.colors })
        } catch (error) {
            // General
            dispatch(actions.apiCallFailed(error.message))
            // Specific
            if (onError) dispatch({ type: onError, payload: error.message })
        }
    }

export default api