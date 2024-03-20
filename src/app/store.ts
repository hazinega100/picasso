import {combineReducers, configureStore } from "@reduxjs/toolkit";
import {appReducer} from "app/reducers/app-reducer";
import {postsReducer} from "app/reducers/posts-reducer";
import {postApi} from "api/postApi";
import {setupListeners} from "@reduxjs/toolkit/query";

const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer,
    [postApi.reducerPath]:postApi.reducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware as any)
})

setupListeners(store.dispatch)
