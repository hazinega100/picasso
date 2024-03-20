import React from "react";
import {NavLink, useParams} from "react-router-dom";
import {theme} from "styles/Theme.styled";
import {Button} from "components/Button";
import {PostType} from "app/reducers/posts-reducer";
import {Loading} from "components/Loading";
import styled from "styled-components";

type PropsType = {
    posts: PostType[]
}

export const PostDetail: React.FC<PropsType> = ({posts}) => {
    const {id} = useParams<{ id: string }>()
    let post
    if (typeof id === "string") {
        post = posts.find(post => post.id === parseInt(id));
    }

    if (!post) {
        return <Loading />
    }
    return (
        <StylePostDetail>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Button color={theme.colors.secondary} fontSize={"12px"}>
                <NavLink to={`/`}>Назад</NavLink>
            </Button>
        </StylePostDetail>
    );
};

const StylePostDetail = styled.div`
  margin: 0 auto;
  text-align: center;
`
