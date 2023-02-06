import styled from 'styled-components'

export const MyPassword = styled.input`
width:100%;
height:30px;

margin-right:5px;
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