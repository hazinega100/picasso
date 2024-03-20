import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import {postsApi} from "api/appApi";
import {setStatus} from "app/reducers/app-reducer";

export type PostType = {
    userId?: number
    id: number
    title: string
    body: string
}

const initState: PostType[] = []

const slice = createSlice({
    name: "posts",
    initialState: initState,
    reducers: {
        getPosts: (state, action: PayloadAction<PostType[]>) => {
            state.splice(0, state.length, ...action.payload);
        }
    }
})

export const postsReducer = slice.reducer
const getPostsAC = slice.actions.getPosts

export const getPostsTC = () => (dispatch: Dispatch) => {
    dispatch(setStatus({status: "loading"}))
    postsApi.getPosts()
        .then(res => {
            dispatch(setStatus({status: "succeed"}))
            dispatch(getPostsAC(res.data))
        })
}
