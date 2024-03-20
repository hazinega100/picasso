import styled from "styled-components";

export const Button = styled.button<{ color?: string, fontSize?: string }>`
  padding: 5px 15px;
  border-radius: 5px;
  background: ${props => props.color || "#2157f2"};
  font-size: ${props => props.fontSize};
  text-transform: uppercase;

  a {
    color: white;
  }
`
