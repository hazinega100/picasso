import axios from "axios";
import {PostType} from "app/reducers/posts-reducer";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const postsApi = {
    getPosts() {
        return instance.get<PostType[]>("posts")
    }
}
