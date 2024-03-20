import React from "react";
import styled from "styled-components";
import {PostType} from "app/reducers/posts-reducer";
import {theme} from "styles/Theme.styled";
import {NavLink} from "react-router-dom";
import {Button} from "components/Button";

export const Post: React.FC<PostType> = ({id, title, body, ...otherProps}) => {
    return (
        <StylePost>
            <Title>№{id}: {title.slice(0, 14)}...</Title>
            <Descr>{body.slice(0, 100)}...</Descr>
            <Button color={theme.colors.primary} fontSize={"12px"}>
                <NavLink to={`/post/${id}`}>Просмотр</NavLink>
            </Button>
        </StylePost>
    );
};

const StylePost = styled.div`

`
const Title = styled.h3`

`
const Descr = styled.p`

`

