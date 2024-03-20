import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {appReducer} from "app/reducers/app-reducer";
import {postsReducer} from "app/reducers/posts-reducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer,
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware)
})

export type RootState = ReturnType<typeof store.getState>

// @ts-ignore
window.store = store
