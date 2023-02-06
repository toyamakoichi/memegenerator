import styled from "styled-components";
import { ThemeInterface } from "../themecontext/theme";

export const MyHeader = styled.div<{theme:ThemeInterface}>`
display: flex;
  justify-content: space-around;
  background: ${({theme}) => theme.background};
  height:100px;
  align-items:center;
  color:black;
  border: ${({ theme }) => theme.border};
`
export const HeaderText = styled.h1<{theme:ThemeInterface}>`
color:${({ theme }) => theme.text};

`