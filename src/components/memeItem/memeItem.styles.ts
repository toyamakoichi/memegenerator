import styled from "styled-components"
import { ThemeInterface } from "../themecontext/theme";
export const Card = styled.div<{ img: string; theme: ThemeInterface }>`
border: ${({ theme }) => theme.border};
width:500px;
height:500px;
background-image:url(${(props) => props.img});
background-size: cover;
background-position: center;
display: flex;
flex-direction: column;
justify-content:end;
align-items:center;
margin: 20px;
color: black;
&:hover{
    transform: scale(1.05);
    transition: 0.5s;
    }
`
export const MemeText = styled.p`
-webkit-text-stroke-width: 2px;
-webkit-text-stroke-color: black;
font-size:20px;
font-weight: 800;
color:white;
`