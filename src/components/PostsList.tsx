import React from "react";
import styled from "styled-components";
import {PostType} from "app/reducers/posts-reducer";
import {Post} from "components/Post";

type PropsType = {
    posts: PostType[]
}

export const PostsList: React.FC<PropsType> = ({posts}) => {

    return (
        <StylePostsList>
            {
                posts.map(p => {
                    return (
                        <StylePost key={p.id}>
                            <Post id={p.id} title={p.title} body={p.body}/>
                        </StylePost>
                    )
                })
            }
        </StylePostsList>
    );
};

const StylePostsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const StylePost = styled.div`
  margin: 10px;
  max-width: 200px;
  width: 100%;
`
