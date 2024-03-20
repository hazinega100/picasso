import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type StatusType = "idle" | "loading" | "succeed" | "failed"
export type AppInitStateType = {
    status: StatusType
    error: null | string
}
const initState: AppInitStateType = {
    status: "idle",
    error: null
}

const slice = createSlice({
    name: "app",
    initialState: initState,
    reducers: {
        setStatus(state, action: PayloadAction<{ status: StatusType }>) {
            state.status = action.payload.status
        },
        setError(state, action: PayloadAction<{ error: null | string }>) {
            state.error = action.payload.error
        }
    }
})

export const appReducer = slice.reducer
export const {setStatus, setError} = slice.actions
