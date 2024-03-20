import React, {useEffect, useState} from "react";
import {postApi} from "api/postApi"
import {PostsList} from "components/PostsList";
import {useDispatch} from "react-redux";
import {Loading} from "components/Loading";
import {Route, Routes} from "react-router-dom";
import {PostDetail} from "components/PostDetail";
import {getPostsTC} from "app/reducers/posts-reducer";

function App() {

    const [currentPostStart, setCurrentPostStart] = useState(0)
    const { data = [], isLoading } = postApi.useGetPostsQuery({limit: 93, start: currentPostStart})
    const [isMyFetching, setIsFetchingDown] = useState(false)
    const [isMyFetchingUp, setIsMyFetchingUp] = useState(false)
    const dispatch = useDispatch()

    const scrollHandler = (e: any): void => {
        if (e.target.documentElement.scrollTop < 50) {
            setIsMyFetchingUp(true)
        }
        if (e.target.documentElement.scrollHeight - e.target.documentElement.scrollTop - window.innerHeight < 50) {
            setIsFetchingDown(true)
            window.scrollTo(0, (e.target.documentElement.scrollHeight + e.target.documentElement.scrollTop));
        }
    }
    useEffect(() => {
        if (isMyFetching) {
            setCurrentPostStart(prev => {
                return prev < 93 ? prev + 1 : prev
            })
            setIsFetchingDown(false)
        }
    }, [isMyFetching])
    useEffect(() => {
        if (isMyFetchingUp) {
            setCurrentPostStart(prev => {
                return prev > 0 ? prev - 1 : prev
            })
            setIsMyFetchingUp(false)
        }
    }, [isMyFetchingUp])
    useEffect(() => {
        dispatch(getPostsTC())
        document.addEventListener("scroll", scrollHandler)
        return () => {
            document.removeEventListener("scroll", scrollHandler)
        }
    }, [])
    return (
        <>
            {isLoading && <Loading/>}
            <Routes>
                <Route path={"/"} element={<PostsList posts={data}/>}/>
                <Route path="/post/:id" element={<PostDetail posts={data}/>}/>
            </Routes>
        </>
    );
}

export default App;
