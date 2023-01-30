import styled from "styled-components";

export const LoadingImg = styled.img`
height: 700px;
  filter: blur(10px);
  clip-path: inset(0);
`
export const LoadedImg = styled.img`
height: 700px;
filter: blur(0px);
transition: filter 0.5s linear;
`