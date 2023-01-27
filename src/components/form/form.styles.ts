import styled from 'styled-components'
import { ThemeInterface } from '../themecontext/theme'
export const MyForm = styled.form<{theme:ThemeInterface}>`
margin: 200px auto;
padding:20px;
background-color:${({theme}) => theme.background};
width: 500px;
border-radius:10px;
color:${({theme}) => theme.text};
`