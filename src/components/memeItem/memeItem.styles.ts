import styled from "styled-components"
import { ThemeInterface } from "../themecontext/theme";
export const Card = styled.div<{ img: string; theme: ThemeInterface }>`
border: ${({ theme }) => theme.border};
width:300px;
height:300px;
background-image:url(${(props) => props.img});
background-size: cover;
border-radius:10px;
background-position: center;
display: flex;
flex-direction: column;
justify-content:end;
align-items:center;
text-align: center;
margin: 20px;
box-shadow: 6px 6px 6px gray;
color: black;
&:hover{
    transform: scale(1.05);
    transition: 0.7s;
    }
`
export const MemeText = styled.p`
-webkit-text-stroke-width: 1.5px;
-webkit-text-stroke-color: black;
font-size:18px;
font-weight: 800;
color:white;
`