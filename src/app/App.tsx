import React, {useCallback, useEffect, useState} from "react";
import {PostsList} from "components/PostsList";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "app/store";
import {StatusType} from "app/reducers/app-reducer";
import {Loading} from "components/Loading";
import {Route, Routes} from "react-router-dom";
import {PostDetail} from "components/PostDetail";
import {getPostsTC, PostType} from "app/reducers/posts-reducer";

function App() {
    const status = useSelector<RootState, StatusType>(state => state.app.status)
    const posts = useSelector<RootState, PostType[]>(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostsTC())
    }, [])
    return (
        <>
            {status === "loading" && <Loading/>}
            <Routes>
                <Route path={"/"} element={<PostsList posts={posts}/>}/>
                <Route path="/post/:id" element={<PostDetail posts={posts}/>}/>
            </Routes>
        </>
    );
}

export default App;
