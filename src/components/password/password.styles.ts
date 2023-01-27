import styled from 'styled-components'

export const MyPassword = styled.input`
width:95%;
height:30px;
padding:3px;
border:1px solid silver;
border-radius: 2px;
&:hover{
    border:1px solid black;
    transition:0.5s;
}
&:focus{
    outline: none;
    border: 1px solid black;
}
`