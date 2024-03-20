import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PostType} from "app/reducers/posts-reducer";

export const postApi = createApi({
    reducerPath: "postApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://jsonplaceholder.typicode.com"}),
    endpoints: (build) => ({
        getPosts: build.query<PostType[], { limit?: number; start?: number }>({
            query: ({limit = 5, start = 0}) => ({
                url: "/posts",
                params: {
                    _limit: limit,
                    _start: start,
                }
            })
        }),
        getPost: build.query<PostType, number>({
            query: (id: number = 1) => `/posts/${id}`
        })
    })
})

export const {useGetPostsQuery} = postApi;
